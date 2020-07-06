import React from "react";
import PropTypes from 'prop-types';

import { STEP_ANSWER, STEP_INDICATION, STEP_PROMPT } from "../../constants/GameSteps";
import { CORRECTION_TIMEOUT } from "../../constants/Config";
import Loading from "../loading/Loading";
import { shuffle } from "../../helpers";
import Entity from "../../lib/Entity";

class Lesson extends React.Component {
    constructor(props) {
        super(props);

        const stats = { score: 0, max: 0, table: {} };
        this.props.entities.forEach(entity => stats.table[entity.id] = { name: entity.name, prompted: 0, gotRight: 0 });

        this.state = { step: STEP_INDICATION, current: undefined, phaseCount: 0, known: [], stats, ...props };
        
        this.onAnswer = this.onAnswer.bind(this);
        this.computeStats = this.computeStats.bind(this);
        this.moveOnToNextStep = this.moveOnToNextStep.bind(this);
    }

    componentDidMount() {
        this.moveOnToNextStep();
    }

    onAnswer(value) {
        if (STEP_INDICATION === this.state.step) {
            return this.moveOnToNextStep();
        } else if (STEP_ANSWER === this.state.step) {
            return;
        }

        const expected = this.state.current.id;
        const isRight = value === expected;

        const answer = { given: value, expected, isRight };
        const stats = this.computeStats(expected, isRight);

        this.setState({ step: STEP_ANSWER, answer, stats });
        setTimeout(() => this.moveOnToNextStep(), this.props.answerTimeout);
    }

    computeStats(expected, isRight) {
        const { score, max, table } = this.state.stats;

        return {
            table: {
                ...table,
                [expected]: {
                    ...table[expected],
                    prompted: table[expected].prompted + 1,
                    gotRight: isRight ? table[expected].gotRight + 1 : table[expected].gotRight,
                },
            },
            max: max + 1,
            score: isRight ? score + 1 : score,
        };
    }

    moveOnToNextStep() {
        if (STEP_INDICATION === this.state.step) {
            if (this.state.indicationCountPerSet === this.state.phaseCount || 0 === this.state.entities.length) { // move on to prompt mode
                const known = shuffle(this.state.known);
                this.setState({ known, step: STEP_PROMPT, phaseCount: 1, current: known[0] });
            } else { // next indication
                const { entities, known, phaseCount } = this.state;
                const nextEntities = [...entities], current = nextEntities.shift(), nextKnown = [...known, current];
                const state = { entities: nextEntities, current, known: nextKnown, phaseCount: phaseCount + 1 };
                this.setState(state);
            }
        } else {
            if (this.state.known.length > this.state.phaseCount) { // next question
                const phaseCount = 1 + this.state.phaseCount;
                this.setState({ step: STEP_PROMPT, phaseCount, current: this.state.known[phaseCount - 1] });
            } else if (0 === this.state.entities.length) { // lesson finished
                this.props.onLessonFinished(this.state.stats);
            } else { // move on to indication mode
                const nextState = { step: STEP_INDICATION, phaseCount: 0 };
                if ( false === this.state.askAgainKnown) {
                    nextState.known = [];
                }

                this.setState(nextState);
                this.moveOnToNextStep();
            }
        }
    }

    render() {
        if (undefined === this.state.current) {
            return <Loading />;
        }

        return <div id="lesson">
            {this.props.renderLesson(this.state, this.moveOnToNextStep, this.onAnswer, this.props.answerTime)}
        </div>;
    }
}

Lesson.propTypes = {
    entities: PropTypes.arrayOf(PropTypes.instanceOf(Entity)).isRequired,
    indicationCountPerSet: PropTypes.number.isRequired,
    onLessonFinished: PropTypes.func.isRequired,
    answerTimeout: PropTypes.number.isRequired,
    askAgainKnown: PropTypes.bool.isRequired,
    renderLesson: PropTypes.func.isRequired,
    answerTime: PropTypes.number.isRequired,
};

Lesson.defaultProps = {
    answerTimeout: CORRECTION_TIMEOUT,
};

export default Lesson;
