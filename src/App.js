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

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/regions/location/learn" component={RegionsLocationLesson} />
                <Route exact path="/regions/location/quizz" component={RegionLocationQuiz} />

                <Route exact path="/departments/code/learn" component={DepartmentsCodeLesson} />
                <Route exact path="/departments/code/quizz" component={DepartmentsCodeQuiz} />

                <Route exact path="/departments/location/learn" component={DepartmentsLocationLesson} />
                <Route exact path="/departments/location/quizz" component={DepartmentsLocationQuiz} />

                <Route exact path="/departments/prefecture/learn" component={DepartmentsPrefectureLesson} />
                <Route exact path="/departments/prefecture/quizz" component={DepartmentsPrefectureQuiz} />

                <Route exact path="/home" component={Home} />

                <Redirect strict from="/" to="/home" />
            </Switch>
        </Router>
    );
}

export default App;
