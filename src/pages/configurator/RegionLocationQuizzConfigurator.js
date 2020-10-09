import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Input } from "@material-ui/core";

import "./Configurator.css";

import { ANSWER_TIME_IN_SECONDS, CORRECTION_TIMEOUT, LOOP_COUNT_PER_QUIZZ } from "../../constants/Config";
import PrimaryButton from "../../components/button/PrimaryButton";
import HomeButton from "../../components/button/HomeButton";
import FormTitle from "../../components/title/FormTitle";
import { useNumberState } from "../../helpers";
import Region from "../../lib/Region";

function RegionLocationQuizzConfigurator(props) {
    const [answerTime, handleAnswerTimeChange] = useNumberState(ANSWER_TIME_IN_SECONDS);
    const [loopCount, handleLoopCountChange] = useNumberState(LOOP_COUNT_PER_QUIZZ);

    const buttonHandler = () =>
        props.onSubmit({ loopCount, answerTime, answerTimeout: CORRECTION_TIMEOUT }, props.regions)
    ;

    const regionsCount = props.regions.length;
    const inputProps = { step: 1, min: 1, max: 99, type: 'number', 'aria-labelledby': 'label-answer-time' };

    return (
        <Box className="configurator">
            <FormTitle>Test yourself - regions map</FormTitle>
            <section>
                <p>There are {regionsCount} regions.</p>
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
                <p>This will result in a total of {loopCount * regionsCount} questions.</p>
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
    regions: PropTypes.arrayOf(PropTypes.instanceOf(Region)).isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default RegionLocationQuizzConfigurator;
