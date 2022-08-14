import React from "react";
import PropTypes from "prop-types";

import { computePromptCount, useCheckboxState, useSliderState, useNumberState } from "../../helpers";
import IndicationCountPicker from "../../components/Configuration/IndicationCountPicker";
import ConfiguratorTitle from "../../components/Configuration/ConfiguratorTitle";
import AnswerTimePicker from "../../components/Configuration/AnswerTimePicker";
import RegionCountInfo from "../../components/Configuration/RegionCountInfo";
import AskAgainKnown from "../../components/Configuration/AskAgainKnown";
import Configurator from "../../components/Configuration/Configurator";
import GoButtonBox from "../../components/Configuration/GoButtonBox";
import { Regions } from "../../data";
import {
    ASK_AGAIN_KNOWN_IN_LESSON,
    REGIONS_INDICATIONS_COUNT,
    ANSWER_TIME_IN_SECONDS,
    CORRECTION_TIMEOUT
} from "../../constants/Config";

function RegionLessonConfigurator(props) {
    const [indicationCountPerSet, handleSliderChange, handleInputChange] = useSliderState(REGIONS_INDICATIONS_COUNT);
    const [askAgainKnown, handleAskAgainKnownChange] = useCheckboxState(ASK_AGAIN_KNOWN_IN_LESSON);
    const [answerTime, handleAnswerTimeChange] = useNumberState(ANSWER_TIME_IN_SECONDS);

    const regionsCount = Regions.length;
    const promptCount = computePromptCount(askAgainKnown, indicationCountPerSet, regionsCount);

    const goButtonHandler = () => props.onSubmit(
        { indicationCountPerSet, askAgainKnown, answerTime, answerTimeout: CORRECTION_TIMEOUT }, Regions
    );

    return (
        <Configurator>
            <ConfiguratorTitle>Learn the location of regions</ConfiguratorTitle>
            <RegionCountInfo regionsCount={regionsCount} />
            <IndicationCountPicker realIndicationCount={indicationCountPerSet} handleSliderChange={handleSliderChange} handleInputChange={handleInputChange} max={regionsCount} />
            <AnswerTimePicker handleAnswerTimeChange={handleAnswerTimeChange} answerTime={answerTime} />
            <AskAgainKnown handleAskAgainKnownChange={handleAskAgainKnownChange} promptCount={promptCount} askAgainKnown={askAgainKnown} />
            <GoButtonBox goButtonHandler={goButtonHandler} promptCount={promptCount} />
        </Configurator>
    );
}

RegionLessonConfigurator.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default RegionLessonConfigurator;
