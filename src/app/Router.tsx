import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Home';
import PracticePage from './pages/Practice';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={ <Navigate to="/home" replace /> } />
            <Route path="/home" element={ <HomePage /> } />
            <Route path="/practice" element={ <PracticePage /> } />
        </Routes>
    );
}
