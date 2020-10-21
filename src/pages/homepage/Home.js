import React from "react";
import { Grid } from "@material-ui/core";

import './Home.css';

import LinkButton from "../../components/Button/LinkButton";

function Home() {
    return (
        <Grid container id="home">
            <Grid item xs className="home-section">
                <h1>Regions - Map</h1>
                <LinkButton url="/regions/location/learn" text="Learn" />
                <LinkButton url="/regions/location/quizz" text="Quizz" />
            </Grid>
            <Grid item xs className="home-section">
                <h1>Departments - Map</h1>
                <LinkButton url="/departments/location/learn" text="Learn" />
                <LinkButton url="/departments/location/quizz" text="Quizz" />
            </Grid>
            <Grid item xs className="home-section">
                <h1>Departments - Code</h1>
                <LinkButton url="/departments/code/learn" text="Learn" />
                <LinkButton url="/departments/code/quizz" text="Quizz" />
            </Grid>
            <Grid item xs className="home-section">
                <h1>Depts - Prefecture</h1>
                <LinkButton url="/departments/prefecture/learn" text="Learn" />
                <LinkButton url="/departments/prefecture/quizz" text="Quizz" />
            </Grid>
            <Grid item xs className="home-section">
                <h1>Maps</h1>
                <LinkButton url="/maps/departments" text="Departments Map" />
            </Grid>
        </Grid>
    );
}

export default Home;
