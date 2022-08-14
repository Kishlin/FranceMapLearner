import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

import PrimaryButton from "../Button/PrimaryButton";
import { useStringState } from "../../helpers";
import Department from "../../lib/Department";
import DepartmentBox from "./DepartmentBox";

function DepartmentNamePrompt(props) {
    const [name, onNameChange] = useStringState('');

    const onAnswerHandler = () => props.onAnswer(name);

    const onKeyDown = ({ keyCode }) => {
        if (13 === keyCode) {
            onAnswerHandler(name);
        }
    };

    const textField = <TextField fullWidth autoFocus inputProps={{ style: { textAlign: 'center' } }}
        label="Department" variant="outlined" helperText="Press enter to submit your answer."
        value={name} onChange={onNameChange} onKeyDown={onKeyDown}
    />;

    return (
        <DepartmentBox
            upper={textField}
            lower={<PrimaryButton handler={onAnswerHandler} text="Submit" />}
        />
    );
}

DepartmentNamePrompt.propTypes = {
    current: PropTypes.instanceOf(Department).isRequired,
    onAnswer: PropTypes.func.isRequired,
};

export default DepartmentNamePrompt;
