import React from 'react';
import Header from '../Others/Header/Header';
import { Outlet } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginPage;