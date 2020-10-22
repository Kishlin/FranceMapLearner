import React from "react";
import { Grid } from "@material-ui/core";

import './Home.css';

import LinkButton from "../../components/Button/LinkButton";

function Home() {
    return (
        <Grid container spacing={2} id="home">
            <Grid item className="home-section">
                <h1>Regions - Map</h1>
                <Grid item xs className="home-button-box">
                    <LinkButton url="/regions/location/learn" text="Learn" />
                    <LinkButton url="/regions/location/quizz" text="Quizz" />
                </Grid>
            </Grid>
            <Grid item className="home-section">
                <h1>Departments - Map</h1>
                <Grid item xs className="home-button-box">
                    <LinkButton url="/departments/location/learn" text="Learn" />
                    <LinkButton url="/departments/location/quizz" text="Quizz" />
                </Grid>
            </Grid>
            <Grid item className="home-section">
                <h1>Departments - Code</h1>
                <Grid item xs className="home-button-box">
                    <LinkButton url="/departments/code/learn" text="Learn" />
                    <LinkButton url="/departments/code/quizz" text="Quizz" />
                    <LinkButton url="/departments/code/rev-quizz" text="Reverse Quizz" />
                </Grid>
            </Grid>
            <Grid item className="home-section">
                <h1>Depts - Prefecture</h1>
                <Grid item xs className="home-button-box">
                    <LinkButton url="/departments/prefecture/learn" text="Learn" />
                    <LinkButton url="/departments/prefecture/quizz" text="Quizz" />
                    <LinkButton url="/departments/prefecture/rev-quizz" text="Reverse Quizz" />
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

export default Home;
