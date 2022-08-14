import React from "react";
import PropTypes from "prop-types";

import {STEP_ANSWER, STEP_INDICATION, STEP_PROMPT} from "../../constants/GameSteps";
import DepartmentPrefectureIndication from "./DepartmentPrefectureIndication";
import DepartmentPrefecturePrompt from "./DepartmentPrefecturePrompt";
import DepartmentPrefectureAnswer from "./DepartmentPrefectureAnswer";

function DepartmentPrefectureBody(props) {
    if (STEP_INDICATION === props.game.step) {
        return <DepartmentPrefectureIndication current={props.game.current} />;
    }

    if (STEP_PROMPT === props.game.step) {
        return <DepartmentPrefecturePrompt current={props.game.current} onAnswer={props.onAnswer} />;
    }

    if (STEP_ANSWER === props.game.step) {
        return <DepartmentPrefectureAnswer answer={props.game.answer} />;
    }

    return <noscript />
}

DepartmentPrefectureBody.propTypes = {
    onAnswer: PropTypes.func.isRequired,
    game: PropTypes.object.isRequired,
};

export default DepartmentPrefectureBody;
