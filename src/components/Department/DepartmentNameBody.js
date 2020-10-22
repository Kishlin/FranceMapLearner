import React from "react";
import PropTypes from "prop-types";

import { STEP_ANSWER, STEP_PROMPT } from "../../constants/GameSteps";
import DepartmentNamePrompt from "./DepartmentNamePrompt";
import DepartmentNameAnswer from "./DepartmentNameAnswer";

function DepartmentNameBody(props) {
    if (STEP_PROMPT === props.game.step) {
        return <DepartmentNamePrompt current={props.game.current} onAnswer={props.onAnswer} />;
    }

    if (STEP_ANSWER === props.game.step) {
        return <DepartmentNameAnswer answer={props.game.answer} />;
    }

    return <noscript />
}

DepartmentNameBody.propTypes = {
    onAnswer: PropTypes.func.isRequired,
    game: PropTypes.object.isRequired,
};

export default DepartmentNameBody;
