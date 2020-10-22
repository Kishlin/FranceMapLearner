import React from "react";
import { Box } from "@material-ui/core";

import DepartmentQuizzConfigurator from "../configurator/DepartmentQuizzConfigurator";
import QuizLocationHeader from "../../components/Quizz/QuizLocationHeader";
import QuizGenericFooter from "../../components/Quizz/QuizGenericFooter";
import MapDepartments from "../../components/Maps/MapDepartments";
import Quiz from "../../components/Quizz/Quiz";

function DepartmentsLocationQuiz() {
    const renderConfiguration = onSubmit => <DepartmentQuizzConfigurator onSubmit={onSubmit} />;

    const renderQuizz = (game, stats, moveOnToNextStep, onAnswer) => (
        <Box id="game">
            <QuizLocationHeader game={game} stats={stats} />
            <MapDepartments game={game} onDepartmentClick={onAnswer} />
            <QuizGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </Box>
    );

    return <Quiz renderGame={renderQuizz} renderConfiguration={renderConfiguration} />;
}

export default DepartmentsLocationQuiz;
