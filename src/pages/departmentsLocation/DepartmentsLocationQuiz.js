import React from "react";
import { Box } from "@material-ui/core";

import DepartmentQuizConfigurator from "../configurator/DepartmentQuizConfigurator";
import QuizLocationHeader from "../../components/Quiz/QuizLocationHeader";
import QuizGenericFooter from "../../components/Quiz/QuizGenericFooter";
import MapDepartments from "../../components/Maps/MapDepartments";
import Quiz from "../../components/Quiz/Quiz";

function DepartmentsLocationQuiz() {
    const renderConfiguration = onSubmit => <DepartmentQuizConfigurator onSubmit={onSubmit} />;

    const renderQuiz = (game, stats, moveOnToNextStep, onAnswer) => (
        <Box id="game">
            <QuizLocationHeader game={game} stats={stats} />
            <MapDepartments game={game} onDepartmentClick={onAnswer} />
            <QuizGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </Box>
    );

    return <Quiz renderGame={renderQuiz} renderConfiguration={renderConfiguration} />;
}

export default DepartmentsLocationQuiz;
