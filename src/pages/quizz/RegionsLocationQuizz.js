import React from "react";
import PropTypes from "prop-types";

import RegionQuizzConfigurator from "../configurator/RegionQuizzConfigurator";
import QuizLocationHeader from "../../components/Quizz/QuizLocationHeader";
import QuizGenericFooter from "../../components/Quizz/QuizGenericFooter";
import MapRegions from "../../components/Maps/MapRegions";
import Quiz from "../../components/Quizz/Quiz";
import Region from "../../lib/Region";

function RegionLocationQuiz(props) {
    const renderConfiguration = onSubmit => (
        <RegionQuizzConfigurator onSubmit={onSubmit} regions={props.regions} />
    );

    const renderQuizz = (game, stats, moveOnToNextStep, onAnswer) => (
        <>
            <QuizLocationHeader game={game} stats={stats} />
            <MapRegions game={game} onRegionClick={onAnswer} />
            <QuizGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} />
        </>
    );

    return <Quiz renderGame={renderQuizz} renderConfiguration={renderConfiguration} />;
}

RegionLocationQuiz.propTypes = {
    regions: PropTypes.arrayOf(PropTypes.instanceOf(Region)).isRequired,
};

export default RegionLocationQuiz;
