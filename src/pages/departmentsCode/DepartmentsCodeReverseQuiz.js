import React from "react";
import { Box } from "@material-ui/core";

import DepartmentQuizConfigurator from "../configurator/DepartmentQuizConfigurator";
import QuizCodeHeaderReversed from "../../components/Quiz/QuizCodeHeaderReversed";
import DepartmentNameBody from "../../components/Department/DepartmentNameBody";
import QuizGenericFooter from "../../components/Quiz/QuizGenericFooter";
import { computeAnswerName } from "../../helpers";
import Quiz from "../../components/Quiz/Quiz";

function DepartmentsCodeReverseQuiz() {
    const renderConfiguration = onSubmit => <DepartmentQuizConfigurator onSubmit={onSubmit} />;

    const renderQuiz = (game, stats, moveOnToNextStep, onAnswer) => (
        <Box id="game">
            <QuizCodeHeaderReversed game={game} stats={stats} />
            <DepartmentNameBody game={game} onAnswer={onAnswer} />
            <QuizGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </Box>
    );

    return <Quiz renderGame={renderQuiz} renderConfiguration={renderConfiguration} computeAnswer={computeAnswerName} />;
}

export default DepartmentsCodeReverseQuiz;
