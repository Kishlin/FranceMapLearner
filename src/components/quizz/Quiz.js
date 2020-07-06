import React from "react";
import PropTypes from 'prop-types';

import { STEP_ANSWER, STEP_PROMPT } from "../../constants/GameSteps";
import { CORRECTION_TIMEOUT } from "../../constants/Config";
import Loading from "../loading/Loading";
import { shuffle } from "../../helpers";
import Entity from "../../lib/Entity";

class Quiz extends React.Component {
    constructor(props) {
        super(props);

        const stats = { score: 0, max: 0, table: {} };
        this.props.entities.forEach(entity => stats.table[entity.id] = { name: entity.name, prompted: 0, gotRight: 0 });

        this.state = { step: STEP_PROMPT, current: undefined, phaseCount: -1, loopDone: 0, stats, ...props };

        this.onAnswer = this.onAnswer.bind(this);
        this.computeStats = this.computeStats.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
    }

    componentDidMount() {
        this.nextQuestion();
    }

    onAnswer(value) {
        if (STEP_ANSWER === this.state.step) {
            return;
        }

        const expected = this.state.current.id;
        const isRight = value === expected;

        const answer = { given: value, expected, isRight };
        const stats = this.computeStats(expected, isRight);

        this.setState({ step: STEP_ANSWER, answer, stats });
        setTimeout(() => this.nextQuestion(), this.props.answerTimeout);
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

    nextQuestion() {
        if (this.state.loopCount === this.state.loopDone) { // no more loops
            this.props.onQuizFinished(this.state.stats);
        } else if (this.state.phaseCount === this.state.entities.length - 1) { // start a new loop
            const { loopDone, entities } = this.state;
            this.setState({ phaseCount: -1, loopDone: loopDone + 1, entities: shuffle(entities) });
            this.nextQuestion();
        } else { // next prompt
            const phaseCount = this.state.phaseCount + 1;
            const current = this.state.entities[phaseCount];
            this.setState({ step: STEP_PROMPT, phaseCount, current });
        }
    }

    render() {
        if (undefined === this.state.current) {
            return <Loading />;
        }

        return <div id="quiz">
            {this.props.renderLesson(this.state, this.nextQuestion, this.onAnswer, this.props.answerTime)}
        </div>;
    }
}

Quiz.propTypes = {
    entities: PropTypes.arrayOf(PropTypes.instanceOf(Entity)).isRequired,
    answerTimeout: PropTypes.number.isRequired,
    onQuizFinished: PropTypes.func.isRequired,
    renderLesson: PropTypes.func.isRequired,
    answerTime: PropTypes.number.isRequired,
    loopCount: PropTypes.number.isRequired,
};

Quiz.defaultProps = {
    answerTimeout: CORRECTION_TIMEOUT,
}

export default Quiz;
