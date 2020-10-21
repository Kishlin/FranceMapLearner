import React from "react";

import RegionLessonConfigurator from "../configurator/RegionLessonConfigurator";
import LessonLocationHeader from "../../components/Lesson/LessonLocationHeader";
import LessonGenericFooter from "../../components/Lesson/LessonGenericFooter";
import MapRegions from "../../components/Maps/MapRegions";
import Lesson from "../../components/Lesson/Lesson";

function RegionsLocationLesson() {
    const renderConfiguration = onSubmit => <RegionLessonConfigurator onSubmit={onSubmit} />;

    const renderLesson = (game, stats, moveOnToNextStep, onAnswer) => (
        <>
            <LessonLocationHeader game={game} stats={stats} />
            <MapRegions game={game} onRegionClick={onAnswer} />
            <LessonGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </>
    );

    return <Lesson renderGame={renderLesson} renderConfiguration={renderConfiguration} />;
}

export default RegionsLocationLesson;
