import React from "react";
import PropTypes from "prop-types";

import RegionLocationQuizzConfigurator from "../configurator/RegionLocationQuizzConfigurator";
import { ANSWER_TIME_IN_SECONDS, LOOP_COUNT_PER_QUIZZ } from "../../constants/Config";
import QuizLocationHeader from "../../components/quizz/QuizLocationHeader";
import QuizGenericFooter from "../../components/quizz/QuizGenericFooter";
import ScoreScreen from "../../components/ScoreScreen/ScoreScreen";
import MapRegions from "../../components/maps/MapRegions";
import Quiz from "../../components/quizz/Quiz";
import Region from "../../lib/Region";

class RegionLocationQuiz extends React.Component {
    constructor(props) {
        super(props);

        this.state = { configured: false, finished: false };

        this.onConfigurationSubmit = this.onConfigurationSubmit.bind(this);
        this.onLessonFinished = this.onLessonFinished.bind(this);
    }

    onConfigurationSubmit(loopCount, answerTime) {
        this.setState({ loopCount, answerTime, configured: true });
    }

    onLessonFinished(stats) {
        this.setState({ stats, finished: true });
    }

    renderLesson(game, moveOnToNextStep, onAnswer, answerTime) {
        return <>
            <QuizLocationHeader game={game} />
            <MapRegions game={game} onRegionClick={onAnswer} />
            <QuizGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} answerTime={answerTime} />
        </>;
    }

    render() {
        if (false === this.state.configured) {
            return <RegionLocationQuizzConfigurator
                onSubmit={this.onConfigurationSubmit}
                max={this.props.regions.length}
                {...this.props}
            />
        }

        if (true === this.state.finished) {
            return <ScoreScreen stats={this.state.stats} />
        }

        return  (
            <Quiz {...this.state} entities={this.props.regions} renderLesson={this.renderLesson} onQuizFinished={this.onLessonFinished} />
        );
    }
}

RegionLocationQuiz.propTypes = {
    regions: PropTypes.arrayOf(PropTypes.instanceOf(Region)).isRequired,
    answerTime: PropTypes.number.isRequired,
    loopCount: PropTypes.number.isRequired,
};

RegionLocationQuiz.defaultProps = {
    answerTime: ANSWER_TIME_IN_SECONDS,
    loopCount: LOOP_COUNT_PER_QUIZZ,
}

export default RegionLocationQuiz;
