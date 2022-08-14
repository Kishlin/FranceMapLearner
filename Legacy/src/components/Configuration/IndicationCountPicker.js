import React from "react";
import PropTypes from 'prop-types';
import { Grid, Input, Slider } from "@material-ui/core";

function IndicationCountPicker(props) {
    const inputProps = { step: 1, min: 1, max: props.max, type: 'number', 'aria-labelledby': 'label-indications' };

    return (
        <section>
            <p id="label-indications">How many indications do you want before every prompt set?</p>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={10}>
                    <Slider
                        min={1}
                        max={props.max}
                        marks={true}
                        value={props.realIndicationCount}
                        onChange={props.handleSliderChange}
                        aria-labelledby="label-indications"
                        style={{display: 'inline-block'}}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Input margin="dense" onChange={props.handleInputChange} value={props.realIndicationCount}
                           inputProps={inputProps} />
                </Grid>
            </Grid>
        </section>
    );
}

IndicationCountPicker.propTypes = {
    realIndicationCount: PropTypes.number.isRequired,
    handleSliderChange: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    max: PropTypes.number.isRequired,
}

export default IndicationCountPicker;
