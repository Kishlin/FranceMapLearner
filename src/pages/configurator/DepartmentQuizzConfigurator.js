import React from "react";
import PropTypes from "prop-types";

import { ANSWER_TIME_IN_SECONDS, CORRECTION_TIMEOUT, LOOP_COUNT_PER_QUIZZ } from "../../constants/Config";
import {computeIndicationMax, shuffle, useNumberState, useRegionSelectState} from "../../helpers";
import QuizzLoopCountPicker from "../../components/Configuration/QuizzLoopCountPicker";
import ConfiguratorTitle from "../../components/Configuration/ConfiguratorTitle";
import AnswerTimePicker from "../../components/Configuration/AnswerTimePicker";
import RegionSelector from "../../components/Configuration/RegionSelector";
import Configurator from "../../components/Configuration/Configurator";
import GoButtonBox from "../../components/Configuration/GoButtonBox";
import { Regions, Departments } from "../../data";

function DepartmentQuizzConfigurator(props) {
    const [regionSelect, handleRegionSelectChange] = useRegionSelectState(Regions);
    const [answerTime, handleAnswerTimeChange] = useNumberState(ANSWER_TIME_IN_SECONDS);
    const [loopCount, handleLoopCountChange] = useNumberState(LOOP_COUNT_PER_QUIZZ);

    const indicationMax = computeIndicationMax(Regions, regionSelect);
    const questionCount = loopCount * indicationMax;

    const goButtonHandler = () => {
        const entities = shuffle(Departments.filter(department => regionSelect[department.region]))
        props.onSubmit({ loopCount, answerTime, answerTimeout: CORRECTION_TIMEOUT }, entities);
    };

    return (
        <Configurator>
            <ConfiguratorTitle>Test yourself - departments map</ConfiguratorTitle>
            <RegionSelector regions={Regions} handleRegionSelectChange={handleRegionSelectChange} regionSelect={regionSelect} />
            <QuizzLoopCountPicker handleLoopCountChange={handleLoopCountChange} questionCount={questionCount} loopCount={loopCount} />
            <AnswerTimePicker handleAnswerTimeChange={handleAnswerTimeChange} answerTime={answerTime} />
            <GoButtonBox goButtonHandler={goButtonHandler} promptCount={questionCount} />
        </Configurator>
    );
}

DepartmentQuizzConfigurator.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default DepartmentQuizzConfigurator;
