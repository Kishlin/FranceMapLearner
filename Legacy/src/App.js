import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './App.css';

import DepartmentsPrefectureReverseQuiz from "./pages/departmentsPrefecture/DepartmentsPrefectureReverseQuiz";
import DepartmentsPrefectureLesson from "./pages/departmentsPrefecture/DepartmentsPrefectureLesson";
import DepartmentsPrefectureQuiz from "./pages/departmentsPrefecture/DepartmentsPrefectureQuiz";
import DepartmentsCodeReverseQuiz from "./pages/departmentsCode/DepartmentsCodeReverseQuiz";
import DepartmentsLocationLesson from "./pages/departmentsLocation/DepartmentsLocationLesson";
import DepartmentsLocationQuiz from "./pages/departmentsLocation/DepartmentsLocationQuiz";
import RegionsLocationLesson from "./pages/regionsLocation/RegionsLocationLesson";
import DepartmentsCodeLesson from "./pages/departmentsCode/DepartmentsCodeLesson";
import DepartmentsCodeQuiz from "./pages/departmentsCode/DepartmentsCodeQuiz";
import RegionLocationQuiz from "./pages/regionsLocation/RegionsLocationQuiz";
import DepartmentsMap from "./pages/map/DepartmentsMap";
import Home from "./pages/homepage/Home";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/regions/location/learn" component={RegionsLocationLesson} />
                <Route exact path="/regions/location/quiz" component={RegionLocationQuiz} />

                <Route exact path="/departments/code/learn" component={DepartmentsCodeLesson} />
                <Route exact path="/departments/code/quiz" component={DepartmentsCodeQuiz} />
                <Route exact path="/departments/code/rev-quiz" component={DepartmentsCodeReverseQuiz} />

                <Route exact path="/departments/location/learn" component={DepartmentsLocationLesson} />
                <Route exact path="/departments/location/quiz" component={DepartmentsLocationQuiz} />

                <Route exact path="/departments/prefecture/learn" component={DepartmentsPrefectureLesson} />
                <Route exact path="/departments/prefecture/quiz" component={DepartmentsPrefectureQuiz} />
                <Route exact path="/departments/prefecture/rev-quiz" component={DepartmentsPrefectureReverseQuiz} />

                <Route exact path="/maps/departments" component={DepartmentsMap} />

                <Route exact path="/home" component={Home} />

                <Redirect strict from="/" to="/home" />
            </Switch>
        </Router>
    );
}

export default App;
