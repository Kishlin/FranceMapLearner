import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

import PrimaryButton from "../Button/PrimaryButton";
import { useStringState } from "../../helpers";
import Department from "../../lib/Department";
import DepartmentBox from "./DepartmentBox";

function DepartmentPrefecturePrompt(props) {
    const [prefecture, onPrefectureChange] = useStringState('');

    const onAnswerHandler = () => props.onAnswer(prefecture);

    const onKeyDown = ({ keyCode }) => {
        if (13 === keyCode) {
            onAnswerHandler(prefecture);
        }
    };

    const textField = <TextField fullWidth autoFocus inputProps={{ style: { textAlign: 'center' } }}
        label="Prefecture" variant="outlined" helperText="Press enter to submit your answer."
        value={prefecture} onChange={onPrefectureChange} onKeyDown={onKeyDown}
    />;

    return (
        <DepartmentBox
            upper={textField}
            lower={<PrimaryButton handler={onAnswerHandler} text="Submit" />}
        />
    );
}

DepartmentPrefecturePrompt.propTypes = {
    current: PropTypes.instanceOf(Department).isRequired,
    onAnswer: PropTypes.func.isRequired,
};

export default DepartmentPrefecturePrompt;
