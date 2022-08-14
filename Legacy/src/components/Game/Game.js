import React from "react";
import PropTypes from 'prop-types';

import { STEP_ANSWER, STEP_INDICATION } from "../../constants/GameSteps";
import {computeStats} from "../../helpers/computeStats";
import ScoreScreen from "../ScoreScreen/ScoreScreen";
import Loading from "../Loading/Loading";

class Game extends React.Component {
    constructor(props) {
        super(props);

        const game = { configuration: undefined } ;
        const stats = { score: 0, max: 0, table: {} };

        this.state = { phaseCount: 0, known: [], game, stats };
        this.answerTimeoutId = undefined;

        this.nextStep = this.nextStep.bind(this);
        this.onAnswer = this.onAnswer.bind(this);
        this.onAnswerTimeout = this.onAnswerTimeout.bind(this);
        this.onConfigurationSubmit = this.onConfigurationSubmit.bind(this);
    }

    componentWillUnmount() {
        clearTimeout(this.answerTimeoutId);
    }

    onConfigurationSubmit(configuration, entities) {
        const updateState = state => {
            const stats = state.stats;
            entities.forEach(entity => stats.table[entity.id] = { name: entity.name, prompted: 0, gotRight: 0 });

            return { ...state, stats, entities, game: { ...state.game, configuration } };
        };

        this.setState(updateState, this.nextStep);
    }

    onAnswer(value) {
        if (STEP_INDICATION === this.state.game.step) {
            return this.nextStep();
        } else if (STEP_ANSWER === this.state.game.step) {
            return;
        }

        const current = this.state.game.current;
        const answer = this.props.computeAnswer(current, value);
        const stats = computeStats(this.state.stats, current.id, answer.isRight);

        this.setState(state => ({
            game: { ...state.game, step: STEP_ANSWER, answer },
            stats
        }));

        this.answerTimeoutId = setTimeout(this.onAnswerTimeout, this.state.game.configuration.answerTimeout);
    }

    onAnswerTimeout() {
        this.answerTimeoutId = undefined;
        this.nextStep();
    }

    nextStep() {
        const nextState = this.props.moveOnToNextStep(this.state);
        this.setState(state => ({
            ...state, ...nextState
        }));
    }

    render() {
        if (true === this.state.finished) {
            return <ScoreScreen stats={this.state.stats} />
        }

        if (undefined === this.state.game.configuration) {
            return this.props.renderConfiguration(this.onConfigurationSubmit);
        }

        if (undefined === this.state.game.current) {
            return <Loading />;
        }

        return this.props.renderGame(this.state.game, this.state.stats, this.nextStep, this.onAnswer);
    }
}

Game.propTypes = {
    renderConfiguration: PropTypes.func.isRequired,
    moveOnToNextStep: PropTypes.func.isRequired,
    computeAnswer: PropTypes.func.isRequired,
    renderGame: PropTypes.func.isRequired,
}

export default Game;
