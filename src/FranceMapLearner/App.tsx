import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

import { DepartmentsProvider } from './Departments/Context/DepartmentsContext';
import { RegionsProvider } from './Regions/Context/RegionsContext';

import './App.css';

import DepartmentsCodeLesson from './Departments/DepartmentsCodeLesson';
import DepartmentsMap from './Departments/DepartmentsMap';
import Homepage from './Homepage/Homepage';

function App() {
    return (
        <DepartmentsProvider>
            <RegionsProvider>
                <Router>
                    <Routes>
                        <Route path="/departments/code/learn" element={<DepartmentsCodeLesson />} />

                        <Route path="/maps/departments" element={<DepartmentsMap />} />

                        <Route path="/home" element={<Homepage />} />

                        <Route path="*" element={<Navigate to="/home" />} />
                    </Routes>
                </Router>
            </RegionsProvider>
        </DepartmentsProvider>
    );
}

export default App;
