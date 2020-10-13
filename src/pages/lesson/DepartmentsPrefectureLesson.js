import React from "react";
import PropTypes from "prop-types";

import DepartmentPrefectureBody from "../../components/Department/DepartmentPrefectureBody";
import DepartmentLessonConfigurator from "../configurator/DepartmentLessonConfigurator";
import LessonPrefectureHeader from "../../components/Lesson/LessonPrefectureHeader";
import LessonGenericFooter from "../../components/Lesson/LessonGenericFooter";
import Lesson from "../../components/Lesson/Lesson";
import Department from "../../lib/Department";
import { Box } from "@material-ui/core";
import Region from "../../lib/Region";

function DepartmentsPrefectureLesson(props) {
    const renderConfiguration = onSubmit => (
        <DepartmentLessonConfigurator onSubmit={onSubmit} {...props} />
    );

    const renderLesson = (game, stats, moveOnToNextStep, onAnswer) => (
        <Box style={{ minWidth: '30vw' }}>
            <LessonPrefectureHeader game={game} stats={stats} />
            <DepartmentPrefectureBody game={game} onAnswer={onAnswer} />
            <LessonGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </Box>
    );

    return <Lesson renderGame={renderLesson} renderConfiguration={renderConfiguration} />;
}

DepartmentsPrefectureLesson.propTypes = {
    departments: PropTypes.arrayOf(PropTypes.instanceOf(Department)).isRequired,
    regions: PropTypes.arrayOf(PropTypes.instanceOf(Region)).isRequired,
};

export default DepartmentsPrefectureLesson;
