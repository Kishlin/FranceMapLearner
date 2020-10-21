import React from "react";

import DepartmentPrefectureBody from "../../components/Department/DepartmentPrefectureBody";
import DepartmentLessonConfigurator from "../configurator/DepartmentLessonConfigurator";
import LessonPrefectureHeader from "../../components/Lesson/LessonPrefectureHeader";
import LessonGenericFooter from "../../components/Lesson/LessonGenericFooter";
import Lesson from "../../components/Lesson/Lesson";
import { Box } from "@material-ui/core";

function DepartmentsPrefectureLesson() {
    const renderConfiguration = onSubmit => <DepartmentLessonConfigurator onSubmit={onSubmit} />;

    const renderLesson = (game, stats, moveOnToNextStep, onAnswer) => (
        <Box style={{ minWidth: '30vw' }}>
            <LessonPrefectureHeader game={game} stats={stats} />
            <DepartmentPrefectureBody game={game} onAnswer={onAnswer} />
            <LessonGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </Box>
    );

    return <Lesson renderGame={renderLesson} renderConfiguration={renderConfiguration} />;
}

export default DepartmentsPrefectureLesson;
