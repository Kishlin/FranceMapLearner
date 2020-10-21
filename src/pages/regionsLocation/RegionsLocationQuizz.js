import React from "react";

import RegionQuizzConfigurator from "../configurator/RegionQuizzConfigurator";
import QuizLocationHeader from "../../components/Quizz/QuizLocationHeader";
import QuizGenericFooter from "../../components/Quizz/QuizGenericFooter";
import MapRegions from "../../components/Maps/MapRegions";
import Quiz from "../../components/Quizz/Quiz";

function RegionLocationQuiz() {
    const renderConfiguration = onSubmit => <RegionQuizzConfigurator onSubmit={onSubmit} />;

    const renderQuizz = (game, stats, moveOnToNextStep, onAnswer) => (
        <>
            <QuizLocationHeader game={game} stats={stats} />
            <MapRegions game={game} onRegionClick={onAnswer} />
            <QuizGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </>
    );

    return <Quiz renderGame={renderQuizz} renderConfiguration={renderConfiguration} />;
}

export default RegionLocationQuiz;
