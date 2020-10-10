import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

import DepartmentCodeBox from "./DepartmentCodeBox";
import PrimaryButton from "../Button/PrimaryButton";
import { useStringState } from "../../helpers";
import Department from "../../lib/Department";

function DepartmentCodePrompt(props) {
    const [code, onCodeChange] = useStringState('');
    const handler = () => props.onAnswer(isNaN(code) ? code : Number(code));
    const onKeyDown = ({ keyCode }) => {
        if (13 === keyCode) {
            props.onAnswer(isNaN(code) ? code : Number(code));
        }
    };

    const textField = <TextField fullWidth autoFocus inputProps={{ style: { textAlign: 'center' } }}
        label="Code" variant="outlined" helperText="Press enter to submit your answer."
        value={code} onChange={onCodeChange} onKeyDown={onKeyDown}
    />;

    return (
        <DepartmentCodeBox
            upper={textField}
            lower={<PrimaryButton handler={handler} text="Submit" />}
        />
    );
}

DepartmentCodePrompt.propTypes = {
    current: PropTypes.instanceOf(Department).isRequired,
    onAnswer: PropTypes.func.isRequired,
};

export default DepartmentCodePrompt;
