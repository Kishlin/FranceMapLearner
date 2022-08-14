import React from 'react';
import { Grid } from '@mui/material';

import './Homepage.css';

import LinkButton from '../../Shared/Components/Button/LinkButton';

function Homepage() {
    return (
        <Grid container spacing={2} id="home">
            <Grid item className="home-section">
                <h1>Regions - Map</h1>
                <Grid item xs className="home-button-box">
                    <LinkButton url="/regions/location/learn" text="Learn" />
                    <LinkButton url="/regions/location/quiz" text="Quiz" />
                </Grid>
            </Grid>
            <Grid item className="home-section">
                <h1>Departments - Map</h1>
                <Grid item xs className="home-button-box">
                    <LinkButton url="/departments/location/learn" text="Learn" />
                    <LinkButton url="/departments/location/quiz" text="Quiz" />
                </Grid>
            </Grid>
            <Grid item className="home-section">
                <h1>Departments - Code</h1>
                <Grid item xs className="home-button-box">
                    <LinkButton url="/departments/code/learn" text="Learn" />
                    <LinkButton url="/departments/code/quiz" text="Quiz" />
                    <LinkButton url="/departments/code/rev-quiz" text="Reverse Quiz" />
                </Grid>
            </Grid>
            <Grid item className="home-section">
                <h1>Depts - Prefecture</h1>
                <Grid item xs className="home-button-box">
                    <LinkButton url="/departments/prefecture/learn" text="Learn" />
                    <LinkButton url="/departments/prefecture/quiz" text="Quiz" />
                    <LinkButton url="/departments/prefecture/rev-quiz" text="Reverse Quiz" />
                </Grid>
            </Grid>
            <Grid item className="home-section">
                <h1>Maps</h1>
                <Grid item xs className="home-button-box">
                    <LinkButton url="/maps/departments" text="Departments Map" />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Homepage;
