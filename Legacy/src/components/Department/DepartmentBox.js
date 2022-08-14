import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

import "./Department.css";

function DepartmentBox(props) {
    return (
        <Grid container className="department-body">
            <Grid item xs={12}>{props.upper}</Grid>
            <Grid item xs={12}>{props.lower}</Grid>
        </Grid>
    );
}

DepartmentBox.propTypes = {
    upper: PropTypes.object.isRequired,
    lower: PropTypes.object.isRequired,
};

export default DepartmentBox;
