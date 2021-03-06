import React from "react";
import PropTypes from "prop-types";

import IndicationCountPicker from "../../components/Configuration/IndicationCountPicker";
import ConfiguratorTitle from "../../components/Configuration/ConfiguratorTitle";
import AnswerTimePicker from "../../components/Configuration/AnswerTimePicker";
import RegionSelector from "../../components/Configuration/RegionSelector";
import AskAgainKnown from "../../components/Configuration/AskAgainKnown";
import Configurator from "../../components/Configuration/Configurator";
import GoButtonBox from "../../components/Configuration/GoButtonBox";
import { Regions, Departments } from "../../data";
import {
    REGIONS_INDICATIONS_COUNT,
    ASK_AGAIN_KNOWN_IN_LESSON,
    ANSWER_TIME_IN_SECONDS,
    CORRECTION_TIMEOUT
} from "../../constants/Config";
import {
    computeIndicationMax,
    useRegionSelectState,
    computePromptCount,
    useCheckboxState,
    useNumberState,
    useSliderState,
    shuffle
} from "../../helpers";

function DepartmentLessonConfigurator(props) {
    const [indicationCountPerSet, handleSliderChange, handleInputChange] = useSliderState(REGIONS_INDICATIONS_COUNT);
    const [askAgainKnown, handleAskAgainKnownChange] = useCheckboxState(ASK_AGAIN_KNOWN_IN_LESSON);
    const [regionSelect, handleRegionSelectChange] = useRegionSelectState(Regions);
    const [answerTime, handleAnswerTimeChange] = useNumberState(ANSWER_TIME_IN_SECONDS);

    const max = computeIndicationMax(Regions, regionSelect);
    const realIndicationCount = Math.min(max, indicationCountPerSet);
    const promptCount = computePromptCount(askAgainKnown, realIndicationCount, max);

    const goButtonHandler = () => {
        const entities = shuffle(Departments.filter(department => regionSelect[department.region]))
        props.onSubmit({ indicationCountPerSet, askAgainKnown, answerTime, answerTimeout: CORRECTION_TIMEOUT }, entities);
    };

    return (
        <Configurator>
            <ConfiguratorTitle>Learn the location of departments</ConfiguratorTitle>
            <RegionSelector regions={Regions} handleRegionSelectChange={handleRegionSelectChange} regionSelect={regionSelect} />
            <IndicationCountPicker max={max} realIndicationCount={realIndicationCount} handleInputChange={handleInputChange} handleSliderChange={handleSliderChange} />
            <AnswerTimePicker handleAnswerTimeChange={handleAnswerTimeChange} answerTime={answerTime} />
            <AskAgainKnown askAgainKnown={askAgainKnown} handleAskAgainKnownChange={handleAskAgainKnownChange} promptCount={promptCount} />
            <GoButtonBox promptCount={promptCount} goButtonHandler={goButtonHandler} />
        </Configurator>
    );
}

DepartmentLessonConfigurator.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default DepartmentLessonConfigurator;
