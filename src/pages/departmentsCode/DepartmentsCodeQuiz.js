import React from "react";
import { Box } from "@material-ui/core";

import DepartmentQuizConfigurator from "../configurator/DepartmentQuizConfigurator";
import DepartmentCodeBody from "../../components/Department/DepartmentCodeBody";
import QuizGenericFooter from "../../components/Quiz/QuizGenericFooter";
import QuizCodeHeader from "../../components/Quiz/QuizCodeHeader";
import Quiz from "../../components/Quiz/Quiz";

function DepartmentsCodeQuiz() {
    const renderConfiguration = onSubmit => <DepartmentQuizConfigurator onSubmit={onSubmit} />;

    const renderQuiz = (game, stats, moveOnToNextStep, onAnswer) => (
        <Box id="game">
            <QuizCodeHeader game={game} stats={stats} />
            <DepartmentCodeBody game={game} onAnswer={onAnswer} />
            <QuizGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </Box>
    );

    return <Quiz renderGame={renderQuiz} renderConfiguration={renderConfiguration} />;
}

export default DepartmentsCodeQuiz;
