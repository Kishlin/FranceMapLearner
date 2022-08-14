import React from "react";
import PropTypes from "prop-types";

import { ANSWER_TIME_IN_SECONDS, CORRECTION_TIMEOUT, LOOP_COUNT_PER_QUIZZ } from "../../constants/Config";
import QuizLoopCountPicker from "../../components/Configuration/QuizLoopCountPicker";
import ConfiguratorTitle from "../../components/Configuration/ConfiguratorTitle";
import AnswerTimePicker from "../../components/Configuration/AnswerTimePicker";
import RegionCountInfo from "../../components/Configuration/RegionCountInfo";
import Configurator from "../../components/Configuration/Configurator";
import GoButtonBox from "../../components/Configuration/GoButtonBox";
import { useNumberState } from "../../helpers";
import { Regions } from "../../data";

function RegionQuizConfigurator(props) {
    const [answerTime, handleAnswerTimeChange] = useNumberState(ANSWER_TIME_IN_SECONDS);
    const [loopCount, handleLoopCountChange] = useNumberState(LOOP_COUNT_PER_QUIZZ);

    const regionsCount = Regions.length;
    const promptCount = loopCount * regionsCount;

    const goButtonHandler = () => props.onSubmit({ loopCount, answerTime, answerTimeout: CORRECTION_TIMEOUT }, Regions);

    return (
        <Configurator>
            <ConfiguratorTitle>Test yourself - regions map</ConfiguratorTitle>
            <RegionCountInfo regionsCount={regionsCount} />
            <QuizLoopCountPicker handleLoopCountChange={handleLoopCountChange} questionCount={promptCount} loopCount={loopCount} />
            <AnswerTimePicker handleAnswerTimeChange={handleAnswerTimeChange} answerTime={answerTime} />
            <GoButtonBox goButtonHandler={goButtonHandler} promptCount={promptCount} />
        </Configurator>
    );
}

RegionQuizConfigurator.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default RegionQuizConfigurator;
