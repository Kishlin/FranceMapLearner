import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import LearnRegionsLocation from "./routes/learn/regions/location/LearnRegionsLocation";
import Home from "./routes/homepage/Home";

import './App.css';
import QuizRegionLocation from "./routes/quizz/regions/location/QuizzRegionsLocation";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/learn/regions/location">
                    <LearnRegionsLocation />
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
