import React from "react";
import PropTypes from "prop-types";

import DepartmentLessonConfigurator from "../configurator/DepartmentLessonConfigurator";
import LessonLocationHeader from "../../components/Lesson/LessonLocationHeader";
import LessonGenericFooter from "../../components/Lesson/LessonGenericFooter";
import MapDepartments from "../../components/Maps/MapDepartments";
import Lesson from "../../components/Lesson/Lesson";
import Department from "../../lib/Department";
import Region from "../../lib/Region";

function DepartmentsLocationLesson(props) {
    const renderConfiguration = onSubmit => (
        <DepartmentLessonConfigurator onSubmit={onSubmit} {...props} />
    );

    const renderLesson = (game, stats, moveOnToNextStep, onAnswer) => (
        <>
            <LessonLocationHeader game={game} stats={stats} />
            <MapDepartments game={game} onDepartmentClick={onAnswer} />
            <LessonGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </>
    );

    return <Lesson renderGame={renderLesson} renderConfiguration={renderConfiguration} />;
}

DepartmentsLocationLesson.propTypes = {
    departments: PropTypes.arrayOf(PropTypes.instanceOf(Department)).isRequired,
    regions: PropTypes.arrayOf(PropTypes.instanceOf(Region)).isRequired,
};

export default DepartmentsLocationLesson;
