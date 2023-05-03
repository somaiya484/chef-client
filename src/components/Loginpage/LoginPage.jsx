import React from 'react';
import Header from '../Others/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Others/Footer/Footer';

const LoginPage = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginPage;