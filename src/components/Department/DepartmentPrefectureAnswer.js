import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

import DepartmentBox from "./DepartmentBox";

function DepartmentPrefectureAnswer(props) {
    const textField = <TextField fullWidth autoFocus disabled inputProps={{ style: { textAlign: 'center' } }}
                                 label="Prefecture" variant="outlined" helperText="Press enter to submit your answer."
                                 value={props.answer.given} error={!props.answer.isRight}
    />;

    const lowerText = props.answer.isRight ? 'Correct!' : props.answer.expected;

    return <DepartmentBox upper={textField} lower={<p className="answer">{lowerText}</p>} />;
}

DepartmentPrefectureAnswer.propTypes = {
    answer: PropTypes.object.isRequired,
};

export default DepartmentPrefectureAnswer;
