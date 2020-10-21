import React from "react";
import { Box } from "@material-ui/core";

import DepartmentPrefectureBody from "../../components/Department/DepartmentPrefectureBody";
import DepartmentQuizzConfigurator from "../configurator/DepartmentQuizzConfigurator";
import QuizPrefectureHeader from "../../components/Quizz/QuizPrefectureHeader";
import QuizGenericFooter from "../../components/Quizz/QuizGenericFooter";
import Quiz from "../../components/Quizz/Quiz";

function DepartmentsPrefectureQuiz() {
    const renderConfiguration = onSubmit => <DepartmentQuizzConfigurator onSubmit={onSubmit} />;

    const renderQuizz = (game, stats, moveOnToNextStep, onAnswer) => (
        <Box style={{ minWidth: '30vw' }}>
            <QuizPrefectureHeader game={game} stats={stats} />
            <DepartmentPrefectureBody game={game} onAnswer={onAnswer} />
            <QuizGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </Box>
    );

    return <Quiz renderGame={renderQuizz} renderConfiguration={renderConfiguration} />;
}

export default DepartmentsPrefectureQuiz;
