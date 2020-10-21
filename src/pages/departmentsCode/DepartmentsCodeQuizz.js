import React from "react";
import { Box } from "@material-ui/core";

import DepartmentQuizzConfigurator from "../configurator/DepartmentQuizzConfigurator";
import DepartmentCodeBody from "../../components/Department/DepartmentCodeBody";
import QuizGenericFooter from "../../components/Quizz/QuizGenericFooter";
import QuizCodeHeader from "../../components/Quizz/QuizCodeHeader";
import Quiz from "../../components/Quizz/Quiz";

function DepartmentsCodeQuiz() {
    const renderConfiguration = onSubmit => <DepartmentQuizzConfigurator onSubmit={onSubmit} />;

    const renderQuizz = (game, stats, moveOnToNextStep, onAnswer) => (
        <Box style={{ minWidth: '30vw' }}>
            <QuizCodeHeader game={game} stats={stats} />
            <DepartmentCodeBody game={game} onAnswer={onAnswer} />
            <QuizGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </Box>
    );

    return <Quiz renderGame={renderQuizz} renderConfiguration={renderConfiguration} />;
}

export default DepartmentsCodeQuiz;
