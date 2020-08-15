import React from "react";
import PropTypes from "prop-types";

import { ANSWER_TIME_IN_SECONDS, REGIONS_INDICATIONS_COUNT, ASK_AGAIN_KNOWN_IN_LESSON } from "../../constants/Config";
import RegionLocationLessonConfigurator from "../configurator/RegionLocationLessonConfigurator";
import LessonLocationHeader from "../../components/lesson/LessonLocationHeader";
import LessonGenericFooter from "../../components/lesson/LessonGenericFooter";
import ScoreScreen from "../../components/ScoreScreen/ScoreScreen";
import MapRegions from "../../components/maps/MapRegions";
import Lesson from "../../components/lesson/Lesson";
import Region from "../../lib/Region";

class RegionsLocationLesson extends React.Component {
    constructor(props) {
        super(props);

        this.state = { configured: false, finished: false };

        this.onConfigurationSubmit = this.onConfigurationSubmit.bind(this);
        this.onLessonFinished = this.onLessonFinished.bind(this);
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
        if (false === this.state.configured) {
            return <RegionLocationLessonConfigurator
                onSubmit={this.onConfigurationSubmit}
                max={this.props.regions.length}
                {...this.props}
            />
        }

        if (true === this.state.finished) {
            return <ScoreScreen stats={this.state.stats} />
        }

        return  (
            <Lesson {...this.state} entities={this.props.regions} renderLesson={this.renderLesson} onLessonFinished={this.onLessonFinished} />
        );
    }
}

RegionsLocationLesson.propTypes = {
    regions: PropTypes.arrayOf(PropTypes.instanceOf(Region)).isRequired,
    indicationCountPerSet: PropTypes.number.isRequired,
    askAgainKnown: PropTypes.bool.isRequired,
    answerTime: PropTypes.number.isRequired,
};

RegionsLocationLesson.defaultProps = {
    indicationCountPerSet: REGIONS_INDICATIONS_COUNT,
    askAgainKnown: ASK_AGAIN_KNOWN_IN_LESSON,
    answerTime: ANSWER_TIME_IN_SECONDS,
}

export default RegionsLocationLesson;
