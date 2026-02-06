import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './pages/Home';
import PracticePage from './pages/Practice';

export default function Router() {
    const navigate = useNavigate();

    useEffect(() => {
        const redirectPath = sessionStorage.getItem('redirectPath');
        if (redirectPath) {
            sessionStorage.removeItem('redirectPath');
            navigate(redirectPath, { replace: true });
        }
    }, [navigate]);

    return (
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/practice" element={ <PracticePage /> } />
        </Routes>
    );
}
