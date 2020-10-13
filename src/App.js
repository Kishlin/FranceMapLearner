import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './App.css';

import DepartmentsLocationLesson from "./pages/lesson/DepartmentsLocationLesson";
import DepartmentsPrefectureQuiz from "./pages/quizz/DepartmentsPrefectureQuizz";
import DepartmentsLocationQuiz from "./pages/quizz/DepartmentsLocationQuizz";
import DepartmentsCodeLesson from "./pages/lesson/DepartmentsCodeLesson";
import RegionsLocationLesson from "./pages/lesson/RegionsLocationLesson";
import DepartmentsCodeQuiz from "./pages/quizz/DepartmentsCodeQuizz";
import RegionLocationQuiz from "./pages/quizz/RegionsLocationQuizz";
import Home from "./pages/homepage/Home";

import Departments from "./data/Departments";
import Regions  from "./data/Regions";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/learn/regions/location">
                    <RegionsLocationLesson regions={Regions} />
                </Route>
                <Route path="/learn/departments/code">
                    <DepartmentsCodeLesson departments={Departments} regions={Regions} />
                </Route>
                <Route path="/learn/departments/location">
                    <DepartmentsLocationLesson departments={Departments} regions={Regions} />
                </Route>
                <Route path="/quizz/regions/location">
                    <RegionLocationQuiz regions={Regions} />
                </Route>
                <Route path="/quizz/departments/code">
                    <DepartmentsCodeQuiz departments={Departments} regions={Regions} />
                </Route>
                <Route path="/quizz/departments/location">
                    <DepartmentsLocationQuiz departments={Departments} regions={Regions} />
                </Route>
                <Route path="/quizz/departments/prefecture">
                    <DepartmentsPrefectureQuiz departments={Departments} regions={Regions} />
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
