import React from "react";
import { Typography } from "@material-ui/core";

function ConfiguratorTitle(props) {
    return <Typography variant="h4" color="primary">{props.children}</Typography>;
}

export default ConfiguratorTitle;
