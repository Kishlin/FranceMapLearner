import React from "react";
import PropTypes from "prop-types";

import DepartmentLocationQuizzConfigurator from "../configurator/DepartmentLocationQuizzConfigurator";
import QuizLocationHeader from "../../components/quizz/QuizLocationHeader";
import QuizGenericFooter from "../../components/quizz/QuizGenericFooter";
import MapDepartments from "../../components/maps/MapDepartments";
import Quiz from "../../components/quizz/Quiz";
import Department from "../../lib/Department";
import Region from "../../lib/Region";

function DepartmentsLocationQuiz(props) {
    const renderConfiguration = onSubmit => (
        <DepartmentLocationQuizzConfigurator onSubmit={onSubmit} {...props} />
    );

    const renderQuizz = (game, stats, moveOnToNextStep, onAnswer) => {
        return <>
            <QuizLocationHeader game={game} stats={stats} />
            <MapDepartments game={game} onDepartmentClick={onAnswer} />
            <QuizGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </>;
    }

    return <Quiz entities={props.departments} renderGame={renderQuizz} renderConfiguration={renderConfiguration} />;
}

DepartmentsLocationQuiz.propTypes = {
    departments: PropTypes.arrayOf(PropTypes.instanceOf(Department)).isRequired,
    regions: PropTypes.arrayOf(PropTypes.instanceOf(Region)).isRequired,
};

export default DepartmentsLocationQuiz;
