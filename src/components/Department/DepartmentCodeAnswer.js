import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

import DepartmentCodeBox from "./DepartmentCodeBox";

function DepartmentCodeAnswer(props) {
    const textField = <TextField fullWidth autoFocus inputProps={{ style: { textAlign: 'center' } }}
        label="Code" variant="outlined" helperText="Press enter to submit your answer."
        value={props.answer.given} error={!props.answer.isRight}
    />;

    const lowerText = props.answer.isRight ? 'Correct!' : props.answer.expected;

    return <DepartmentCodeBox upper={textField} lower={<p className="answer">{lowerText}</p>} />;
}

DepartmentCodeAnswer.propTypes = {
    answer: PropTypes.object.isRequired,
};

export default DepartmentCodeAnswer;
