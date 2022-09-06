import {
    Box,
    Grid,
    Input,
    Slider,
    Typography,
} from '@mui/material';
import React from 'react';

type IndicationCountPickerProps = {
    sliderSetter: SliderSetter,
    inputSetter: InputSetter,
    indicationCount: number,
    max: number,
};

function IndicationCountPicker({
    indicationCount,
    sliderSetter,
    inputSetter,
    max,
}: IndicationCountPickerProps) {
    const inputProps = {
        'aria-labelledby': 'label-indications',
        type: 'number',
        step: 1,
        min: 1,
        max,
    };

    return (
        <Box className="configurator-section">
            <Typography id="label-indications">How many indications do you want before every prompt set?</Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={10}>
                    <Slider
                        marks
                        min={1}
                        max={max}
                        onChange={sliderSetter}
                        value={indicationCount}
                        aria-labelledby="label-indications"
                        style={{display: 'inline-block'}}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Input
                        margin="dense"
                        onChange={inputSetter}
                        inputProps={inputProps}
                        value={indicationCount}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default IndicationCountPicker;
