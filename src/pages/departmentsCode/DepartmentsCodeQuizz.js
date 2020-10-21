import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

import DepartmentQuizzConfigurator from "../configurator/DepartmentQuizzConfigurator";
import DepartmentCodeBody from "../../components/Department/DepartmentCodeBody";
import QuizGenericFooter from "../../components/Quizz/QuizGenericFooter";
import QuizCodeHeader from "../../components/Quizz/QuizCodeHeader";
import Quiz from "../../components/Quizz/Quiz";
import Department from "../../lib/Department";
import Region from "../../lib/Region";

function DepartmentsCodeQuiz(props) {
    const renderConfiguration = onSubmit => (
        <DepartmentQuizzConfigurator onSubmit={onSubmit} {...props} />
    );

    const renderQuizz = (game, stats, moveOnToNextStep, onAnswer) => (
        <Box style={{ minWidth: '30vw' }}>
            <QuizCodeHeader game={game} stats={stats} />
            <DepartmentCodeBody game={game} onAnswer={onAnswer} />
            <QuizGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </Box>
    );

    return <Quiz renderGame={renderQuizz} renderConfiguration={renderConfiguration} />;
}

DepartmentsCodeQuiz.propTypes = {
    departments: PropTypes.arrayOf(PropTypes.instanceOf(Department)).isRequired,
    regions: PropTypes.arrayOf(PropTypes.instanceOf(Region)).isRequired,
};

export default DepartmentsCodeQuiz;
