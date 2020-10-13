import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

import PrimaryButton from "../Button/PrimaryButton";
import Departments from "../../data/Departments";
import { useStringState } from "../../helpers";
import Department from "../../lib/Department";
import DepartmentBox from "./DepartmentBox";

function DepartmentPrefecturePrompt(props) {
    const onSubmit = value => {
        const match = Departments.find(
            department => department.slug === value
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f\s\t]/g, "")
        );

        props.onAnswer(undefined === match ? undefined : match.id);
    }

    const [prefecture, onPrefectureChange] = useStringState('');
    const handler = () => onSubmit(prefecture);
    const onKeyDown = ({ keyCode }) => {
        if (13 === keyCode) {
            onSubmit(prefecture);
        }
    };

    const textField = <TextField fullWidth autoFocus inputProps={{ style: { textAlign: 'center' } }}
        label="Prefecture" variant="outlined" helperText="Press enter to submit your answer."
        value={prefecture} onChange={onPrefectureChange} onKeyDown={onKeyDown}
    />;

    return (
        <DepartmentBox
            upper={textField}
            lower={<PrimaryButton handler={handler} text="Submit" />}
        />
    );
}

DepartmentPrefecturePrompt.propTypes = {
    current: PropTypes.instanceOf(Department).isRequired,
    onAnswer: PropTypes.func.isRequired,
};

export default DepartmentPrefecturePrompt;
