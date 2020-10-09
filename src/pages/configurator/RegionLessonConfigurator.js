import React from "react";
import PropTypes from "prop-types";

import { computePromptCount, useCheckboxState, useSliderState, useNumberState } from "../../helpers";
import IndicationCountPicker from "../../components/configuration/IndicationCountPicker";
import ConfiguratorTitle from "../../components/configuration/ConfiguratorTitle";
import AnswerTimePicker from "../../components/configuration/AnswerTimePicker";
import RegionCountInfo from "../../components/configuration/RegionCountInfo";
import AskAgainKnown from "../../components/configuration/AskAgainKnown";
import Configurator from "../../components/configuration/Configurator";
import GoButtonBox from "../../components/configuration/GoButtonBox";
import Region from "../../lib/Region";
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

    const regionsCount = props.regions.length;
    const promptCount = computePromptCount(askAgainKnown, indicationCountPerSet, regionsCount);

    const goButtonHandler = () => props.onSubmit(
        { indicationCountPerSet, askAgainKnown, answerTime, answerTimeout: CORRECTION_TIMEOUT }, props.regions
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
    regions: PropTypes.arrayOf(PropTypes.instanceOf(Region)).isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default RegionLessonConfigurator;
