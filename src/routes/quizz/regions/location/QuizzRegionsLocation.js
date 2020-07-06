import React from "react";
import PropTypes from "prop-types";

import RegionLocationQuizzConfigurator from "../../../../components/configurator/RegionLocationQuizzConfigurator";
import { ANSWER_TIME_IN_SECONDS, LOOP_COUNT_PER_QUIZZ } from "../../../../constants/Config";
import QuizLocationHeader from "../../../../components/quizz/QuizLocationHeader";
import QuizGenericFooter from "../../../../components/quizz/QuizGenericFooter";
import ScoreScreen from "../../../../components/ScoreScreen/ScoreScreen";
import MapRegions from "../../../../components/maps/MapRegions";
import Loading from "../../../../components/loading/Loading";
import Quiz from "../../../../components/quizz/Quiz";
import { shuffle } from "../../../../helpers";

class QuizRegionLocation extends React.Component {
    constructor(props) {
        super(props);

        this.state = { entities: [], configured: false, finished: false };

        this.onConfigurationSubmit = this.onConfigurationSubmit.bind(this);
        this.onLessonFinished = this.onLessonFinished.bind(this);
    }

    componentDidMount() {
        import("../../../../data/Regions").then(content => {
            this.setState({ entities: shuffle(content.default) });
        })
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
        if (0 === this.state.entities.length) {
            return (<Loading />);
        }

        if (false === this.state.configured) {
            return <RegionLocationQuizzConfigurator
                onSubmit={this.onConfigurationSubmit}
                max={this.state.entities.length}
                {...this.props}
            />
        }

        if (true === this.state.finished) {
            return <ScoreScreen stats={this.state.stats} />
        }

        return  (
            <Quiz {...this.state} renderLesson={this.renderLesson} onQuizFinished={this.onLessonFinished} />
        );
    }
}

QuizRegionLocation.propTypes = {
    answerTime: PropTypes.number.isRequired,
    loopCount: PropTypes.number.isRequired,
};

QuizRegionLocation.defaultProps = {
    answerTime: ANSWER_TIME_IN_SECONDS,
    loopCount: LOOP_COUNT_PER_QUIZZ,
}

export default QuizRegionLocation;
