import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

import "./Department.css";

function DepartmentCodeBox(props) {
    return (
        <Grid container className="department-code-body">
            <Grid item xs={12}>{props.upper}</Grid>
            <Grid item xs={12}>{props.lower}</Grid>
        </Grid>
    );
}

DepartmentCodeBox.propTypes = {
    upper: PropTypes.object.isRequired,
    lower: PropTypes.object.isRequired,
};

export default DepartmentCodeBox;
