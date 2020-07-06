import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Input } from "@material-ui/core";

import "./Configurator.css";

import { useNumberState } from "../../helpers";
import PrimaryButton from "../button/PrimaryButton";
import HomeButton from "../button/HomeButton";
import FormTitle from "../title/FormTitle";

function RegionLocationQuizzConfigurator(props) {
    const [answerTime, handleAnswerTimeChange] = useNumberState(props.answerTime);
    const [loopCount, handleLoopCountChange] = useNumberState(props.loopCount);

    const buttonHandler = () => props.onSubmit(loopCount, answerTime);

    const inputProps = { step: 1, min: 1, max: 99, type: 'number', 'aria-labelledby': 'label-answer-time' };

    return (
        <Box className="configurator">
            <FormTitle>Test yourself - regions map</FormTitle>
            <section>
                <p>There are {props.max} regions.</p>
            </section>
            <section>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={10}>
                        <p id="label-answer-time">How many times should regions be looped?</p>
                    </Grid>
                    <Grid item xs={2}>
                        <Input margin="dense" onChange={handleLoopCountChange} value={loopCount} inputProps={inputProps} />
                    </Grid>
                </Grid>
                <p>This will result in a total of {loopCount * props.max} questions.</p>
            </section>
            <section>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={10}>
                        <p id="label-answer-time">How many seconds do you want to answer?</p>
                    </Grid>
                    <Grid item xs={2}>
                        <Input margin="dense" onChange={handleAnswerTimeChange} value={answerTime} inputProps={inputProps} />
                    </Grid>
                </Grid>
            </section>
            <section>
                <Grid container spacing={2} alignItems="flex-start">
                    <Grid item><PrimaryButton handler={buttonHandler} /></Grid>
                    <Grid item><HomeButton /></Grid>
                </Grid>
            </section>
        </Box>
    );
}

RegionLocationQuizzConfigurator.propTypes = {
    answerTime: PropTypes.number.isRequired,
    loopCount: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
    max: PropTypes.number.isRequired,
};

export default RegionLocationQuizzConfigurator;
