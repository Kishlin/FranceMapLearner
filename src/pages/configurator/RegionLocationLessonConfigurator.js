import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Input, Slider, Checkbox, FormControlLabel } from "@material-ui/core";

import "./Configurator.css";

import { computeQuestionCount, useCheckboxState, useSliderState, useNumberState } from "../../helpers";
import PrimaryButton from "../../components/button/PrimaryButton";
import HomeButton from "../../components/button/HomeButton";
import FormTitle from "../../components/title/FormTitle";
import {
    ANSWER_TIME_IN_SECONDS,
    ASK_AGAIN_KNOWN_IN_LESSON,
    CORRECTION_TIMEOUT,
    REGIONS_INDICATIONS_COUNT
} from "../../constants/Config";

function RegionLocationLessonConfigurator(props) {
    const [indicationCountPerSet, handleSliderChange, handleInputChange] = useSliderState(REGIONS_INDICATIONS_COUNT);
    const [askAgainKnown, handleAskAgainKnownChange] = useCheckboxState(ASK_AGAIN_KNOWN_IN_LESSON);
    const [answerTime, handleAnswerTimeChange] = useNumberState(ANSWER_TIME_IN_SECONDS);

    const questionCount = computeQuestionCount(askAgainKnown, indicationCountPerSet, props.max);

    const buttonHandler = () =>
        props.onSubmit({ indicationCountPerSet, askAgainKnown, answerTime, answerTimeout: CORRECTION_TIMEOUT })
    ;

    const answerTimeInputProps = { step: 1, min: 1, max: 99, type: 'number', 'aria-labelledby': 'label-answer-time' };
    const indicationCountProps = { step: 1, min: 1, max: props.max, type: 'number', 'aria-labelledby': 'label-indications' };

    return (
        <Box className="configurator">
            <FormTitle>Learn the location of regions</FormTitle>
            <section>
                <p>There are {props.max} regions.</p>
            </section>
            <section>
                <p id="label-indications">How many indications do you want before every prompt set?</p>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={10}>
                        <Slider
                            min={1}
                            marks={true}
                            max={props.max}
                            value={indicationCountPerSet}
                            onChange={handleSliderChange}
                            aria-labelledby="label-indications"
                            style={{ display: 'inline-block' }}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Input margin="dense" onChange={handleInputChange} value={indicationCountPerSet} inputProps={indicationCountProps} />
                    </Grid>
                </Grid>
            </section>
            <section>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={10}>
                        <p id="label-answer-time">How many seconds do you want to answer?</p>
                    </Grid>
                    <Grid item xs={2}>
                        <Input margin="dense" onChange={handleAnswerTimeChange} value={answerTime} inputProps={answerTimeInputProps} />
                    </Grid>
                </Grid>
            </section>
            <section>
                <FormControlLabel control={
                    <Checkbox checked={askAgainKnown} onChange={handleAskAgainKnownChange} name="checkbox" color="primary" />
                } label="Ask again previously learned regions at every set?" />
                <p>This will result in a total of {questionCount} questions.</p>
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

RegionLocationLessonConfigurator.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    max: PropTypes.number.isRequired,
};

export default RegionLocationLessonConfigurator;
