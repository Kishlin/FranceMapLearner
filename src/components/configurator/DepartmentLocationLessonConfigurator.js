import React from "react";
import PropTypes from "prop-types";
import { Box, Checkbox, FormControlLabel, Grid, Input, Slider } from "@material-ui/core";

import "./Configurator.css";

import {computeQuestionCount, useCheckboxState, useNumberState, useObjectState, useSliderState} from "../../helpers";
import PrimaryButton from "../button/PrimaryButton";
import HomeButton from "../button/HomeButton";
import FormTitle from "../title/FormTitle";
import Region from "../../lib/Region";

function DepartmentLocationLessonConfigurator(props) {
    const [indicationCountPerSet, handleSliderChange, handleInputChange] = useSliderState(props.indicationCountPerSet);
    const [askAgainKnown, handleAskAgainKnownChange] = useCheckboxState(props.askAgainKnown);
    const [answerTime, handleAnswerTimeChange] = useNumberState(props.answerTime);

    const baseRegionSelect = {};
    props.regions.forEach(region => baseRegionSelect[region.id] = false);
    const [regionSelect, handleRegionSelectChange] = useObjectState(baseRegionSelect);

    const computeIndicationMax = () => props.regions
        .filter((region) => regionSelect[region.id])
        .reduce((total, region) => total + region.departmentCount, 0);

    const max = computeIndicationMax();
    const realIndicationCount = Math.min(max, indicationCountPerSet);
    const questionCount = computeQuestionCount(askAgainKnown, realIndicationCount, max);
    const answerTimeInputProps = { step: 1, min: 1, max: 99, type: 'number', 'aria-labelledby': 'label-answer-time' };
    const indicationCountNumberInputProps = { step: 1, min: 1, max, type: 'number', 'aria-labelledby': 'label-indications' };

    const buttonHandler = () => props.onSubmit(realIndicationCount, askAgainKnown, answerTime, regionSelect);

    const regionCheckboxList = props.regions.map(region => {
        const label = `${region.name} (${region.departmentCount})`;
        const checkbox =  <Checkbox checked={regionSelect[region.id]} onChange={handleRegionSelectChange}
                                    name={region.id.toString()} color="primary" />;

        return (<Grid key={region.id} item xs><FormControlLabel label={label} control={checkbox} /></Grid>);
    });

    return (
        <Box className="configurator">
            <FormTitle>Learn the location of departments</FormTitle>
            <section>
                <p>Pick regions which should be included (at least one).</p>
                <Grid container spacing={2} direction="row">{regionCheckboxList}</Grid>
            </section>
            <section>
                <p id="label-indications">How many indications do you want before every prompt set?</p>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={10}>
                        <Slider
                            min={1}
                            max={max}
                            marks={true}
                            value={realIndicationCount}
                            onChange={handleSliderChange}
                            aria-labelledby="label-indications"
                            style={{display: 'inline-block'}}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Input margin="dense" onChange={handleInputChange} value={realIndicationCount}
                               inputProps={indicationCountNumberInputProps}/>
                    </Grid>
                </Grid>
            </section>
            <section>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={10}>
                        <p id="label-answer-time">How many seconds do you want to answer?</p>
                    </Grid>
                    <Grid item xs={2}>
                        <Input margin="dense" onChange={handleAnswerTimeChange} value={answerTime}
                               inputProps={answerTimeInputProps}/>
                    </Grid>
                </Grid>
            </section>
            <section>
                <FormControlLabel control={
                    <Checkbox checked={askAgainKnown} onChange={handleAskAgainKnownChange} name="checkbox"
                              color="primary"/>
                } label="Ask again previously learned departments at every set?"/>
                <p>This will result in a total of {questionCount} questions.</p>
            </section>
            <section>
                <Grid container spacing={2} alignItems="center">
                    <Grid item><PrimaryButton disabled={0 === max} handler={buttonHandler} /></Grid>
                    <Grid item><HomeButton /></Grid>
                </Grid>
            </section>
        </Box>
    );
}

DepartmentLocationLessonConfigurator.propTypes = {
    regions: PropTypes.arrayOf(PropTypes.instanceOf(Region)).isRequired,
    indicationCountPerSet: PropTypes.number.isRequired,
    askAgainKnown: PropTypes.bool.isRequired,
    answerTime: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default DepartmentLocationLessonConfigurator;
