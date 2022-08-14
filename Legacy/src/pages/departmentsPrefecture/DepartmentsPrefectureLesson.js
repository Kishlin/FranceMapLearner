import React from "react";
import { Box } from "@material-ui/core";

import DepartmentPrefectureBody from "../../components/Department/DepartmentPrefectureBody";
import DepartmentLessonConfigurator from "../configurator/DepartmentLessonConfigurator";
import LessonPrefectureHeader from "../../components/Lesson/LessonPrefectureHeader";
import LessonGenericFooter from "../../components/Lesson/LessonGenericFooter";
import { computeAnswerPrefecture } from "../../helpers";
import Lesson from "../../components/Lesson/Lesson";
import "../../components/Game/Game.css";

function DepartmentsPrefectureLesson() {
    const renderConfiguration = onSubmit => <DepartmentLessonConfigurator onSubmit={onSubmit} />;

    const renderLesson = (game, stats, moveOnToNextStep, onAnswer) => (
        <Box id="game">
            <LessonPrefectureHeader game={game} stats={stats} />
            <DepartmentPrefectureBody game={game} onAnswer={onAnswer} />
            <LessonGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </Box>
    );

    return <Lesson
        renderGame={renderLesson}
        renderConfiguration={renderConfiguration}
        computeAnswer={computeAnswerPrefecture}
    />;
}

export default DepartmentsPrefectureLesson;
