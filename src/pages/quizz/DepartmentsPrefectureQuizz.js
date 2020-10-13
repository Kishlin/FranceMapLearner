import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

import DepartmentPrefectureBody from "../../components/Department/DepartmentPrefectureBody";
import DepartmentQuizzConfigurator from "../configurator/DepartmentQuizzConfigurator";
import QuizPrefectureHeader from "../../components/Quizz/QuizPrefectureHeader";
import QuizGenericFooter from "../../components/Quizz/QuizGenericFooter";
import Quiz from "../../components/Quizz/Quiz";
import Department from "../../lib/Department";
import Region from "../../lib/Region";

function DepartmentsPrefectureQuiz(props) {
    const renderConfiguration = onSubmit => (
        <DepartmentQuizzConfigurator onSubmit={onSubmit} {...props} />
    );

    const renderQuizz = (game, stats, moveOnToNextStep, onAnswer) => (
        <Box style={{ minWidth: '30vw' }}>
            <QuizPrefectureHeader game={game} stats={stats} />
            <DepartmentPrefectureBody game={game} onAnswer={onAnswer} />
            <QuizGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </Box>
    );

    return <Quiz renderGame={renderQuizz} renderConfiguration={renderConfiguration} />;
}

DepartmentsPrefectureQuiz.propTypes = {
    departments: PropTypes.arrayOf(PropTypes.instanceOf(Department)).isRequired,
    regions: PropTypes.arrayOf(PropTypes.instanceOf(Region)).isRequired,
};

export default DepartmentsPrefectureQuiz;
