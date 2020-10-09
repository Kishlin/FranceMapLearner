import React from "react";
import PropTypes from "prop-types";

import RegionLocationQuizzConfigurator from "../configurator/RegionLocationQuizzConfigurator";
import QuizLocationHeader from "../../components/quizz/QuizLocationHeader";
import QuizGenericFooter from "../../components/quizz/QuizGenericFooter";
import MapRegions from "../../components/maps/MapRegions";
import Quiz from "../../components/quizz/Quiz";
import Region from "../../lib/Region";

function RegionLocationQuiz(props) {
    const renderConfiguration = onSubmit => (
        <RegionLocationQuizzConfigurator onSubmit={onSubmit} regions={props.regions} />
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
