import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Users from './components/Users/Users';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/users" element={<Users/>} />
        </Routes>
    );
};

export default MainRoutes;