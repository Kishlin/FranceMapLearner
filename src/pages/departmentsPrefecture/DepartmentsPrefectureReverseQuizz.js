import React from "react";
import { Box } from "@material-ui/core";

import QuizPrefectureHeaderReversed from "../../components/Quizz/QuizzPrefectureHeaderReversed";
import DepartmentQuizzConfigurator from "../configurator/DepartmentQuizzConfigurator";
import DepartmentNameBody from "../../components/Department/DepartmentNameBody";
import QuizGenericFooter from "../../components/Quizz/QuizGenericFooter";
import { computeAnswerName } from "../../helpers";
import Quiz from "../../components/Quizz/Quiz";

function DepartmentsPrefectureReverseQuizz() {
    const renderConfiguration = onSubmit => <DepartmentQuizzConfigurator onSubmit={onSubmit} />;

    const renderQuizz = (game, stats, moveOnToNextStep, onAnswer) => (
        <Box id="game">
            <QuizPrefectureHeaderReversed game={game} stats={stats} />
            <DepartmentNameBody game={game} onAnswer={onAnswer} />
            <QuizGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </Box>
    );

    return <Quiz
        renderGame={renderQuizz}
        renderConfiguration={renderConfiguration}
        computeAnswer={computeAnswerName}
    />;
}

export default DepartmentsPrefectureReverseQuizz;
