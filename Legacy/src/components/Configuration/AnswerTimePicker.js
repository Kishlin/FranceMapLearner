import React from "react";
import PropTypes from 'prop-types';
import { Grid, Input } from "@material-ui/core";

function AnswerTimePicker(props) {
    const answerTimeInputProps = { step: 1, min: 1, max: 99, type: 'number', 'aria-labelledby': 'label-answer-time' };

    return (
        <section>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={10}>
                    <p id="label-answer-time">How many seconds do you want to answer?</p>
                </Grid>
                <Grid item xs={2}>
                    <Input margin="dense" onChange={props.handleAnswerTimeChange} value={props.answerTime}
                           inputProps={answerTimeInputProps}/>
                </Grid>
            </Grid>
        </section>
    );
}

AnswerTimePicker.propTypes = {
    handleAnswerTimeChange: PropTypes.func.isRequired,
    answerTime: PropTypes.number.isRequired,
}

export default AnswerTimePicker;
