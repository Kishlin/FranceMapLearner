import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

import DepartmentBox from "./DepartmentBox";
import { Departments } from "../../data";

function DepartmentPrefectureAnswer(props) {
    const getPrefectureForId = id => {
        const match = Departments.find(department => department.id === id);
        return undefined === match ? ':(' : match.hometown;
    }

    const textField = <TextField fullWidth autoFocus disabled inputProps={{ style: { textAlign: 'center' } }}
                                 label="Prefecture" variant="outlined" helperText="Press enter to submit your answer."
                                 value={getPrefectureForId(props.answer.given)} error={!props.answer.isRight}
    />;

    const lowerText = props.answer.isRight ? 'Correct!' : getPrefectureForId(props.answer.expected);

    return <DepartmentBox upper={textField} lower={<p className="answer">{lowerText}</p>} />;
}

DepartmentPrefectureAnswer.propTypes = {
    answer: PropTypes.object.isRequired,
};

export default DepartmentPrefectureAnswer;
