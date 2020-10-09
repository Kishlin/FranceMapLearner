import React from "react";
import PropTypes from 'prop-types';
import { Grid } from "@material-ui/core";

import PrimaryButton from "../button/PrimaryButton";
import HomeButton from "../button/HomeButton";

function GoButtonBox(props) {
    return (
        <section>
            <Grid container spacing={2} alignItems="center">
                <Grid item><PrimaryButton disabled={0 === props.promptCount} handler={props.goButtonHandler} /></Grid>
                <Grid item><HomeButton /></Grid>
            </Grid>
        </section>
    );
}

GoButtonBox.propTypes = {
    goButtonHandler: PropTypes.func.isRequired,
    promptCount: PropTypes.number.isRequired,
}

export default GoButtonBox;
