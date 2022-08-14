import React from "react";
import PropTypes from "prop-types";

import {STEP_ANSWER, STEP_INDICATION, STEP_PROMPT} from "../../constants/GameSteps";
import DepartmentCodeIndication from "./DepartmentCodeIndication";
import DepartmentCodePrompt from "./DepartmentCodePrompt";
import DepartmentCodeAnswer from "./DepartmentCodeAnswer";

function DepartmentCodeBody(props) {
    if (STEP_INDICATION === props.game.step) {
        return <DepartmentCodeIndication current={props.game.current} />;
    }

    if (STEP_PROMPT === props.game.step) {
        return <DepartmentCodePrompt current={props.game.current} onAnswer={props.onAnswer} />;
    }

    if (STEP_ANSWER === props.game.step) {
        return <DepartmentCodeAnswer answer={props.game.answer} />;
    }

    return <noscript />
}

DepartmentCodeBody.propTypes = {
    onAnswer: PropTypes.func.isRequired,
    game: PropTypes.object.isRequired,
};

export default DepartmentCodeBody;
