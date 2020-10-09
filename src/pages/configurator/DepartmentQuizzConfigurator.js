import React from "react";
import PropTypes from "prop-types";

import { ANSWER_TIME_IN_SECONDS, CORRECTION_TIMEOUT, LOOP_COUNT_PER_QUIZZ } from "../../constants/Config";
import {computeIndicationMax, shuffle, useNumberState, useRegionSelectState} from "../../helpers";
import QuizzLoopCountPicker from "../../components/configuration/QuizzLoopCountPicker";
import ConfiguratorTitle from "../../components/configuration/ConfiguratorTitle";
import AnswerTimePicker from "../../components/configuration/AnswerTimePicker";
import RegionSelector from "../../components/configuration/RegionSelector";
import Configurator from "../../components/configuration/Configurator";
import GoButtonBox from "../../components/configuration/GoButtonBox";
import Region from "../../lib/Region";

function DepartmentQuizzConfigurator(props) {
    const [regionSelect, handleRegionSelectChange] = useRegionSelectState(props.regions);
    const [answerTime, handleAnswerTimeChange] = useNumberState(ANSWER_TIME_IN_SECONDS);
    const [loopCount, handleLoopCountChange] = useNumberState(LOOP_COUNT_PER_QUIZZ);

    const indicationMax = computeIndicationMax(props.regions, regionSelect);
    const questionCount = loopCount * indicationMax;

    const goButtonHandler = () => {
        const entities = shuffle(props.departments.filter(department => regionSelect[department.region]))
        props.onSubmit({ loopCount, answerTime, answerTimeout: CORRECTION_TIMEOUT }, entities);
    };

    return (
        <Configurator>
            <ConfiguratorTitle>Test yourself - departments map</ConfiguratorTitle>
            <RegionSelector regions={props.regions} handleRegionSelectChange={handleRegionSelectChange} regionSelect={regionSelect} />
            <QuizzLoopCountPicker handleLoopCountChange={handleLoopCountChange} questionCount={questionCount} loopCount={loopCount} />
            <AnswerTimePicker handleAnswerTimeChange={handleAnswerTimeChange} answerTime={answerTime} />
            <GoButtonBox goButtonHandler={goButtonHandler} promptCount={questionCount} />
        </Configurator>
    );
}

DepartmentQuizzConfigurator.propTypes = {
    regions: PropTypes.arrayOf(PropTypes.instanceOf(Region)).isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default DepartmentQuizzConfigurator;
