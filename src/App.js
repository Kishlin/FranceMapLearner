import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './App.css';

import DepartmentsPrefectureLesson from "./pages/departmentsPrefecture/DepartmentsPrefectureLesson";
import DepartmentsPrefectureQuiz from "./pages/departmentsPrefecture/DepartmentsPrefectureQuizz";
import DepartmentsLocationLesson from "./pages/departmentsLocation/DepartmentsLocationLesson";
import DepartmentsLocationQuiz from "./pages/departmentsLocation/DepartmentsLocationQuizz";
import RegionsLocationLesson from "./pages/regionsLocation/RegionsLocationLesson";
import DepartmentsCodeLesson from "./pages/departmentsCode/DepartmentsCodeLesson";
import DepartmentsCodeQuiz from "./pages/departmentsCode/DepartmentsCodeQuizz";
import RegionLocationQuiz from "./pages/regionsLocation/RegionsLocationQuizz";
import Home from "./pages/homepage/Home";

import Departments from "./data/Departments";
import Regions  from "./data/Regions";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/regions/location/learn">
                    <RegionsLocationLesson regions={Regions} />
                </Route>
                <Route path="/regions/location/quizz">
                    <RegionLocationQuiz regions={Regions} />
                </Route>
                <Route path="/departments/code/learn">
                    <DepartmentsCodeLesson departments={Departments} regions={Regions} />
                </Route>
                <Route path="/departments/code/quizz">
                    <DepartmentsCodeQuiz departments={Departments} regions={Regions} />
                </Route>
                <Route path="/departments/location/learn">
                    <DepartmentsLocationLesson departments={Departments} regions={Regions} />
                </Route>
                <Route path="/departments/location/quizz">
                    <DepartmentsLocationQuiz departments={Departments} regions={Regions} />
                </Route>
                <Route path="/departments/prefecture/learn">
                    <DepartmentsPrefectureLesson departments={Departments} regions={Regions} />
                </Route>
                <Route path="/departments/prefecture/quizz">
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
