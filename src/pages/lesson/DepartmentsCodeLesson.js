import React from "react";
import PropTypes from "prop-types";

import DepartmentLessonConfigurator from "../configurator/DepartmentLessonConfigurator";
import DepartmentCodeBody from "../../components/Department/DepartmentCodeBody";
import LessonGenericFooter from "../../components/Lesson/LessonGenericFooter";
import LessonCodeHeader from "../../components/Lesson/LessonCodeHeader";
import Lesson from "../../components/Lesson/Lesson";
import Department from "../../lib/Department";
import Region from "../../lib/Region";
import {Box} from "@material-ui/core";

function DepartmentsCodeLesson(props) {
    const renderConfiguration = onSubmit => (
        <DepartmentLessonConfigurator onSubmit={onSubmit} {...props} />
    );

    const renderLesson = (game, stats, moveOnToNextStep, onAnswer) => (
        <Box style={{ minWidth: '30vw' }}>
            <LessonCodeHeader game={game} stats={stats} />
            <DepartmentCodeBody game={game} onAnswer={onAnswer} />
            <LessonGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </Box>
    );

    return <Lesson renderGame={renderLesson} renderConfiguration={renderConfiguration} />;
}

DepartmentsCodeLesson.propTypes = {
    departments: PropTypes.arrayOf(PropTypes.instanceOf(Department)).isRequired,
    regions: PropTypes.arrayOf(PropTypes.instanceOf(Region)).isRequired,
};

export default DepartmentsCodeLesson;
