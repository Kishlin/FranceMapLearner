import React from "react";
import {Box} from "@material-ui/core";

import DepartmentLessonConfigurator from "../configurator/DepartmentLessonConfigurator";
import DepartmentCodeBody from "../../components/Department/DepartmentCodeBody";
import LessonGenericFooter from "../../components/Lesson/LessonGenericFooter";
import LessonCodeHeader from "../../components/Lesson/LessonCodeHeader";
import Lesson from "../../components/Lesson/Lesson";

function DepartmentsCodeLesson() {
    const renderConfiguration = onSubmit => <DepartmentLessonConfigurator onSubmit={onSubmit} />;

    const renderLesson = (game, stats, moveOnToNextStep, onAnswer) => (
        <Box style={{ minWidth: '30vw' }}>
            <LessonCodeHeader game={game} stats={stats} />
            <DepartmentCodeBody game={game} onAnswer={onAnswer} />
            <LessonGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </Box>
    );

    return <Lesson renderGame={renderLesson} renderConfiguration={renderConfiguration} />;
}

export default DepartmentsCodeLesson;
