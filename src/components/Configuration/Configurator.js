import React from "react";
import PropTypes from 'prop-types';
import { Box } from "@material-ui/core";

import "./Configurator.css";

function Configurator(props) {
    return (
        <Box className="configurator">
            {props.children}
        </Box>
    );
}

Configurator.propTypes = {
    children: PropTypes.arrayOf(Object).isRequired,
}

export default Configurator;
