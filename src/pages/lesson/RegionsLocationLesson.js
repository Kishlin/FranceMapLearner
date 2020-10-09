import React from "react";
import PropTypes from "prop-types";

import RegionLocationLessonConfigurator from "../configurator/RegionLocationLessonConfigurator";
import LessonLocationHeader from "../../components/lesson/LessonLocationHeader";
import LessonGenericFooter from "../../components/lesson/LessonGenericFooter";
import MapRegions from "../../components/maps/MapRegions";
import Lesson from "../../components/lesson/Lesson";
import Region from "../../lib/Region";

function RegionsLocationLesson(props) {
    const renderConfiguration = onSubmit => (
        <RegionLocationLessonConfigurator onSubmit={onSubmit} regions={props.regions} />
    );

    const renderLesson = (game, stats, moveOnToNextStep, onAnswer) => (
        <>
            <LessonLocationHeader game={game} stats={stats} />
            <MapRegions game={game} onRegionClick={onAnswer} />
            <LessonGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </>
    );

    return <Lesson renderGame={renderLesson} renderConfiguration={renderConfiguration} />;
}

RegionsLocationLesson.propTypes = {
    regions: PropTypes.arrayOf(PropTypes.instanceOf(Region)).isRequired,
};

export default RegionsLocationLesson;
