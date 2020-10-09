import React from "react";
import PropTypes from "prop-types";

import { ANSWER_TIME_IN_SECONDS, CORRECTION_TIMEOUT, LOOP_COUNT_PER_QUIZZ } from "../../constants/Config";
import QuizzLoopCountPicker from "../../components/configuration/QuizzLoopCountPicker";
import ConfiguratorTitle from "../../components/configuration/ConfiguratorTitle";
import AnswerTimePicker from "../../components/configuration/AnswerTimePicker";
import RegionCountInfo from "../../components/configuration/RegionCountInfo";
import Configurator from "../../components/configuration/Configurator";
import GoButtonBox from "../../components/configuration/GoButtonBox";
import { useNumberState } from "../../helpers";
import Region from "../../lib/Region";

function RegionQuizzConfigurator(props) {
    const [answerTime, handleAnswerTimeChange] = useNumberState(ANSWER_TIME_IN_SECONDS);
    const [loopCount, handleLoopCountChange] = useNumberState(LOOP_COUNT_PER_QUIZZ);

    const regionsCount = props.regions.length;
    const promptCount = loopCount * regionsCount;

    const goButtonHandler = () => props.onSubmit(
        { loopCount, answerTime, answerTimeout: CORRECTION_TIMEOUT }, props.regions
    );

    return (
        <Configurator>
            <ConfiguratorTitle>Test yourself - regions map</ConfiguratorTitle>
            <RegionCountInfo regionsCount={regionsCount} />
            <QuizzLoopCountPicker handleLoopCountChange={handleLoopCountChange} questionCount={promptCount} loopCount={loopCount} />
            <AnswerTimePicker handleAnswerTimeChange={handleAnswerTimeChange} answerTime={answerTime} />
            <GoButtonBox goButtonHandler={goButtonHandler} promptCount={promptCount} />
        </Configurator>
    );
}

RegionQuizzConfigurator.propTypes = {
    regions: PropTypes.arrayOf(PropTypes.instanceOf(Region)).isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default RegionQuizzConfigurator;
