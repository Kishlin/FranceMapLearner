import React from "react";
import PropTypes from "prop-types";
import { Box, Checkbox, FormControlLabel, Grid, Input, Slider } from "@material-ui/core";

import "./Configurator.css";

import {
    computeIndicationMax,
    computeQuestionCount,
    shuffle,
    useCheckboxState,
    useNumberState,
    useRegionSelectState,
    useSliderState
} from "../../helpers";
import PrimaryButton from "../../components/button/PrimaryButton";
import HomeButton from "../../components/button/HomeButton";
import FormTitle from "../../components/title/FormTitle";
import Region from "../../lib/Region";
import Department from "../../lib/Department";
import {
    ANSWER_TIME_IN_SECONDS,
    ASK_AGAIN_KNOWN_IN_LESSON,
    CORRECTION_TIMEOUT,
    REGIONS_INDICATIONS_COUNT
} from "../../constants/Config";

function DepartmentLocationLessonConfigurator(props) {
    const [indicationCountPerSet, handleSliderChange, handleInputChange] = useSliderState(REGIONS_INDICATIONS_COUNT);
    const [askAgainKnown, handleAskAgainKnownChange] = useCheckboxState(ASK_AGAIN_KNOWN_IN_LESSON);
    const [regionSelect, handleRegionSelectChange] = useRegionSelectState(props.regions);
    const [answerTime, handleAnswerTimeChange] = useNumberState(ANSWER_TIME_IN_SECONDS);

    const max = computeIndicationMax(props.regions, regionSelect);
    const realIndicationCount = Math.min(max, indicationCountPerSet);
    const questionCount = computeQuestionCount(askAgainKnown, realIndicationCount, max);
    const answerTimeInputProps = { step: 1, min: 1, max: 99, type: 'number', 'aria-labelledby': 'label-answer-time' };
    const indicationCountNumberInputProps = { step: 1, min: 1, max, type: 'number', 'aria-labelledby': 'label-indications' };

    const buttonHandler = () => {
        const entities = shuffle(props.departments.filter(department => regionSelect[department.region]))
        props.onSubmit({ indicationCountPerSet, askAgainKnown, answerTime, answerTimeout: CORRECTION_TIMEOUT }, entities);
    };

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
    departments: PropTypes.arrayOf(PropTypes.instanceOf(Department)).isRequired,
    regions: PropTypes.arrayOf(PropTypes.instanceOf(Region)).isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default DepartmentLocationLessonConfigurator;
