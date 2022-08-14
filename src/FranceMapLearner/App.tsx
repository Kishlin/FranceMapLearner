import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

import './App.css';

import Homepage from './Homepage/Homepage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Homepage />} />

                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </Router>
    );
}

export default App;
