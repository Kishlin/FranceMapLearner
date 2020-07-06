import React from "react";
import PropTypes from "prop-types";

import { ANSWER_TIME_IN_SECONDS, REGIONS_INDICATIONS_COUNT, ASK_AGAIN_KNOWN_IN_LESSON } from "../../../../constants/Config";
import RegionLocationLessonConfigurator from "../../../../components/configurator/RegionLocationLessonConfigurator";
import LessonLocationHeader from "../../../../components/lesson/LessonLocationHeader";
import LessonGenericFooter from "../../../../components/lesson/LessonGenericFooter";
import ScoreScreen from "../../../../components/ScoreScreen/ScoreScreen";
import MapRegions from "../../../../components/maps/MapRegions";
import Loading from "../../../../components/loading/Loading";
import Lesson from "../../../../components/lesson/Lesson";
import { shuffle } from "../../../../helpers";

class LearnRegionsLocation extends React.Component {
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

    onConfigurationSubmit(indicationCountPerSet, askAgainKnown, answerTime) {
        this.setState({ indicationCountPerSet, askAgainKnown, answerTime, configured: true });
    }

    onLessonFinished(stats) {
        this.setState({ stats, finished: true });
    }

    renderLesson(game, moveOnToNextStep, onAnswer, answerTime) {
        return <>
            <LessonLocationHeader game={game} />
            <MapRegions game={game} onRegionClick={onAnswer} />
            <LessonGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} answerTime={answerTime} />
        </>;
    }

    render() {
        if (0 === this.state.entities.length) {
            return (<Loading />);
        }

        if (false === this.state.configured) {
            return <RegionLocationLessonConfigurator
                onSubmit={this.onConfigurationSubmit}
                max={this.state.entities.length}
                {...this.props}
            />
        }

        if (true === this.state.finished) {
            return <ScoreScreen stats={this.state.stats} />
        }

        return  (
            <Lesson {...this.state} renderLesson={this.renderLesson} onLessonFinished={this.onLessonFinished} />
        );
    }
}

LearnRegionsLocation.propTypes = {
    indicationCountPerSet: PropTypes.number.isRequired,
    askAgainKnown: PropTypes.bool.isRequired,
    answerTime: PropTypes.number.isRequired,
};

LearnRegionsLocation.defaultProps = {
    indicationCountPerSet: REGIONS_INDICATIONS_COUNT,
    askAgainKnown: ASK_AGAIN_KNOWN_IN_LESSON,
    answerTime: ANSWER_TIME_IN_SECONDS,
}

export default LearnRegionsLocation;
