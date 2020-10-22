import React from "react";
import { Box } from "@material-ui/core";

import DepartmentLessonConfigurator from "../configurator/DepartmentLessonConfigurator";
import LessonLocationHeader from "../../components/Lesson/LessonLocationHeader";
import LessonGenericFooter from "../../components/Lesson/LessonGenericFooter";
import MapDepartments from "../../components/Maps/MapDepartments";
import Lesson from "../../components/Lesson/Lesson";

function DepartmentsLocationLesson() {
    const renderConfiguration = onSubmit => <DepartmentLessonConfigurator onSubmit={onSubmit} />;

    const renderLesson = (game, stats, moveOnToNextStep, onAnswer) => (
        <Box id="game">
            <LessonLocationHeader game={game} stats={stats} />
            <MapDepartments game={game} onDepartmentClick={onAnswer} />
            <LessonGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </Box>
    );

    return <Lesson renderGame={renderLesson} renderConfiguration={renderConfiguration} />;
}

export default DepartmentsLocationLesson;
