import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './App.css';

import DepartmentsLocationLesson from "./pages/lesson/DepartmentsLocationLesson";
import DepartmentsLocationQuiz from "./pages/quizz/DepartmentsLocationQuizz";
import RegionsLocationLesson from "./pages/lesson/RegionsLocationLesson";
import RegionLocationQuiz from "./pages/quizz/RegionsLocationQuizz";
import Home from "./pages/homepage/Home";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/learn/regions/location">
                    <RegionsLocationLesson />
                </Route>
                <Route path="/learn/departments/location">
                    <DepartmentsLocationLesson />
                </Route>
                <Route path="/quizz/regions/location">
                    <RegionLocationQuiz />
                </Route>
                <Route path="/quizz/departments/location">
                    <DepartmentsLocationQuiz />
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
