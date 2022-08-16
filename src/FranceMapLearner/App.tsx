import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

import { DepartmentsProvider } from './Departments/Context/DepartmentsContext';

import './App.css';

import DepartmentsMap from './Departments/DepartmentsMap';
import Homepage from './Homepage/Homepage';

function App() {
    return (
        <DepartmentsProvider>
            <Router>
                <Routes>
                    <Route path="/maps/departments" element={<DepartmentsMap />} />

                    <Route path="/home" element={<Homepage />} />

                    <Route path="*" element={<Navigate to="/home" />} />
                </Routes>
            </Router>
        </DepartmentsProvider>
    );
}

export default App;
