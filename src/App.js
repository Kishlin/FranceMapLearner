import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Home from "./routes/homepage/Home";

import './App.css';
import QuizRegionLocation from "./routes/quizz/regions/location/QuizzRegionsLocation";
import LearnRegionsLocation from "./routes/learn/regions/location/LearnRegionsLocation";
import LearnDepartmentsLocation from "./routes/learn/departments/location/LearnDepartmentsLocation";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/learn/regions/location">
                    <LearnRegionsLocation />
                </Route>
                <Route path="/learn/departments/location">
                    <LearnDepartmentsLocation />
                </Route>
                <Route path="/quizz/regions/location">
                    <QuizRegionLocation />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Redirect strict from="/" to="/home" />
            </Switch>
        </Router>
    );
}

export default App;
