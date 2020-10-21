import React from "react";

import DepartmentLessonConfigurator from "../configurator/DepartmentLessonConfigurator";
import LessonLocationHeader from "../../components/Lesson/LessonLocationHeader";
import LessonGenericFooter from "../../components/Lesson/LessonGenericFooter";
import MapDepartments from "../../components/Maps/MapDepartments";
import Lesson from "../../components/Lesson/Lesson";

function DepartmentsLocationLesson() {
    const renderConfiguration = onSubmit => <DepartmentLessonConfigurator onSubmit={onSubmit} />;

    const renderLesson = (game, stats, moveOnToNextStep, onAnswer) => (
        <>
            <LessonLocationHeader game={game} stats={stats} />
            <MapDepartments game={game} onDepartmentClick={onAnswer} />
            <LessonGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </>
    );

    return <Lesson renderGame={renderLesson} renderConfiguration={renderConfiguration} />;
}

export default DepartmentsLocationLesson;
