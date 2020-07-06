import React from "react";
import { Typography } from "@material-ui/core";

function FormTitle(props) {
    return <Typography variant="h4" color="primary">{props.children}</Typography>;
}

export default FormTitle;
