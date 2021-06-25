import React from "react";

import RegionQuizConfigurator from "../configurator/RegionQuizConfigurator";
import QuizLocationHeader from "../../components/Quiz/QuizLocationHeader";
import QuizGenericFooter from "../../components/Quiz/QuizGenericFooter";
import MapRegions from "../../components/Maps/MapRegions";
import Quiz from "../../components/Quiz/Quiz";

function RegionLocationQuiz() {
    const renderConfiguration = onSubmit => <RegionQuizConfigurator onSubmit={onSubmit} />;

    const renderQuiz = (game, stats, moveOnToNextStep, onAnswer) => (
        <>
            <QuizLocationHeader game={game} stats={stats} />
            <MapRegions game={game} onRegionClick={onAnswer} />
            <QuizGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </>
    );

    return <Quiz renderGame={renderQuiz} renderConfiguration={renderConfiguration} />;
}

export default RegionLocationQuiz;
