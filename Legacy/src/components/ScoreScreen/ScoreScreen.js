import React from "react";
import PropTypes from 'prop-types';
import { Box } from "@material-ui/core";

import "./ScoreScreen.css";

import RecapTable from "./RecapTable";
import Message from "./Message";
import Header from "./Header";
import Footer from "./Footer";

function ScoreScreen(props) {
    props.stats.percentage = Math.floor(100 * props.stats.score / props.stats.max);

    return (
        <Box id="scoreboard">
            <Header {...props} />
            <Message {...props} />
            <RecapTable {...props} />
            <Footer />
        </Box>
    );
}

ScoreScreen.propType = {
    stats: PropTypes.object.isRequired,
};

export default ScoreScreen;
