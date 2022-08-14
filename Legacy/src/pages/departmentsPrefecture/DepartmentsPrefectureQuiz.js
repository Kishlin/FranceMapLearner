import React from "react";
import { Box } from "@material-ui/core";

import DepartmentPrefectureBody from "../../components/Department/DepartmentPrefectureBody";
import DepartmentQuizConfigurator from "../configurator/DepartmentQuizConfigurator";
import QuizPrefectureHeader from "../../components/Quiz/QuizPrefectureHeader";
import QuizGenericFooter from "../../components/Quiz/QuizGenericFooter";
import { computeAnswerPrefecture } from "../../helpers";
import Quiz from "../../components/Quiz/Quiz";

function DepartmentsPrefectureQuiz() {
    const renderConfiguration = onSubmit => <DepartmentQuizConfigurator onSubmit={onSubmit} />;

    const renderQuiz = (game, stats, moveOnToNextStep, onAnswer) => (
        <Box id="game">
            <QuizPrefectureHeader game={game} stats={stats} />
            <DepartmentPrefectureBody game={game} onAnswer={onAnswer} />
            <QuizGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </Box>
    );

    return <Quiz
        renderGame={renderQuiz}
        renderConfiguration={renderConfiguration}
        computeAnswer={computeAnswerPrefecture}
    />;
}

export default DepartmentsPrefectureQuiz;
