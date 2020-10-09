import React from "react";
import PropTypes from "prop-types";
import { Box, Checkbox, FormControlLabel, Grid, Input } from "@material-ui/core";

import "./Configurator.css";

import {ANSWER_TIME_IN_SECONDS, CORRECTION_TIMEOUT, LOOP_COUNT_PER_QUIZZ} from "../../constants/Config";
import PrimaryButton from "../../components/button/PrimaryButton";
import {shuffle, useNumberState, useObjectState} from "../../helpers";
import HomeButton from "../../components/button/HomeButton";
import FormTitle from "../../components/title/FormTitle";
import Department from "../../lib/Department";
import Region from "../../lib/Region";

function DepartmentLocationQuizzConfigurator(props) {
    const [answerTime, handleAnswerTimeChange] = useNumberState(ANSWER_TIME_IN_SECONDS);
    const [loopCount, handleLoopCountChange] = useNumberState(LOOP_COUNT_PER_QUIZZ);

    const baseRegionSelect = {};
    props.regions.forEach(region => baseRegionSelect[region.id] = false);
    const [regionSelect, handleRegionSelectChange] = useObjectState(baseRegionSelect);

    const computeIndicationMax = () => props.regions
        .filter((region) => regionSelect[region.id])
        .reduce((total, region) => total + region.departmentCount, 0);

    const max = computeIndicationMax();

    const inputProps = { step: 1, min: 1, max: 99, type: 'number', 'aria-labelledby': 'label-answer-time' };

    const buttonHandler = () => {
        const entities = shuffle(props.departments.filter(department => regionSelect[department.region]))
        props.onSubmit({ loopCount, answerTime, regionSelect, answerTimeout: CORRECTION_TIMEOUT }, entities);
    };

    const regionCheckboxList = props.regions.map(region => {
        const label = `${region.name} (${region.departmentCount})`;
        const checkbox =  <Checkbox checked={regionSelect[region.id]} onChange={handleRegionSelectChange}
                                    name={region.id.toString()} color="primary" />;

        return (<Grid key={region.id} item xs><FormControlLabel label={label} control={checkbox} /></Grid>);
    });

    return (
        <Box className="configurator">
            <FormTitle>Test yourself - departments map</FormTitle>
            <section>
                <p>Pick regions which should be included (at least one).</p>
                <Grid container spacing={2} direction="row">{regionCheckboxList}</Grid>
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
                <p>This will result in a total of {loopCount * max} questions.</p>
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
                <Grid container spacing={2} alignItems="center">
                    <Grid item><PrimaryButton disabled={0 === max} handler={buttonHandler} /></Grid>
                    <Grid item><HomeButton /></Grid>
                </Grid>
            </section>
        </Box>
    );
}

DepartmentLocationQuizzConfigurator.propTypes = {
    departments: PropTypes.arrayOf(PropTypes.instanceOf(Department)).isRequired,
    regions: PropTypes.arrayOf(PropTypes.instanceOf(Region)).isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default DepartmentLocationQuizzConfigurator;
