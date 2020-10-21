import React from "react";
import PropTypes from "prop-types";

import RegionLessonConfigurator from "../configurator/RegionLessonConfigurator";
import LessonLocationHeader from "../../components/Lesson/LessonLocationHeader";
import LessonGenericFooter from "../../components/Lesson/LessonGenericFooter";
import MapRegions from "../../components/Maps/MapRegions";
import Lesson from "../../components/Lesson/Lesson";
import Region from "../../lib/Region";

function RegionsLocationLesson(props) {
    const renderConfiguration = onSubmit => (
        <RegionLessonConfigurator onSubmit={onSubmit} regions={props.regions} />
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
