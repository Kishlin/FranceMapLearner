import React from "react";
import { Box } from "@material-ui/core";

import DepartmentQuizzConfigurator from "../configurator/DepartmentQuizzConfigurator";
import QuizCodeHeaderReversed from "../../components/Quizz/QuizCodeHeaderReversed";
import DepartmentNameBody from "../../components/Department/DepartmentNameBody";
import QuizGenericFooter from "../../components/Quizz/QuizGenericFooter";
import { computeAnswerName } from "../../helpers";
import Quiz from "../../components/Quizz/Quiz";

function DepartmentsCodeReverseQuizz() {
    const renderConfiguration = onSubmit => <DepartmentQuizzConfigurator onSubmit={onSubmit} />;

    const renderQuizz = (game, stats, moveOnToNextStep, onAnswer) => (
        <Box style={{ minWidth: '30vw' }}>
            <QuizCodeHeaderReversed game={game} stats={stats} />
            <DepartmentNameBody game={game} onAnswer={onAnswer} />
            <QuizGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </Box>
    );

    return <Quiz renderGame={renderQuizz} renderConfiguration={renderConfiguration} computeAnswer={computeAnswerName} />;
}

export default DepartmentsCodeReverseQuizz;
