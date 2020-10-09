import React from "react";
import PropTypes from 'prop-types';
import { Grid, Input } from "@material-ui/core";

function QuizzLoopCountPicker(props) {
    const inputProps = { step: 1, min: 1, max: 99, type: 'number', 'aria-labelledby': 'label-answer-time' };

    return (
        <section>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={10}>
                    <p id="label-answer-time">How many times should regions be looped?</p>
                </Grid>
                <Grid item xs={2}>
                    <Input margin="dense" onChange={props.handleLoopCountChange} value={props.loopCount} inputProps={inputProps} />
                </Grid>
            </Grid>
            <p>This will result in a total of {props.questionCount} questions.</p>
        </section>
    );
}

QuizzLoopCountPicker.propTypes = {
    handleLoopCountChange: PropTypes.func.isRequired,
    questionCount: PropTypes.number.isRequired,
    loopCount: PropTypes.number.isRequired,
}

export default QuizzLoopCountPicker;
