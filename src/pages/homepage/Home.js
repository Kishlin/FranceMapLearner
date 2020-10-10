import React from "react";
import { Grid } from "@material-ui/core";

import './Home.css';

import LinkButton from "../../components/Button/LinkButton";

function Home() {
    return (
        <Grid container id="home">
            <Grid item xs className="home-section">
                <h1>Regions - Map</h1>
                <LinkButton url="/learn/regions/location" text="Learn" />
                <LinkButton url="/quizz/regions/location" text="Quizz" />
            </Grid>
            <Grid item xs className="home-section">
                <h1>Departments - Map</h1>
                <LinkButton url="/learn/departments/location" text="Learn" />
                <LinkButton url="/quizz/departments/location" text="Quizz" />
            </Grid>
            <Grid item xs className="home-section">
                <h1>Departments - Code</h1>
                <LinkButton url="/learn/departments/code" text="Learn" />
            </Grid>
        </Grid>
    );
}

export default Home;
