import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

import { Departments } from "../../data";

function DepartmentInsights(props) {
    if ('' === props.id) {
        return <noscript />
    }

    const department = Departments.find(department => department.id.toString() === props.id);
    const text = "Code: "+department.id+" ; Name: "+department.name+" ; Prefecture: "+department.hometown+".";

    return (
        <Typography>{text}</Typography>
    );
}

DepartmentInsights.propTypes = {
    id: PropTypes.string,
};

export default DepartmentInsights;
