import React from 'react';
import Header from '../components/Others/Header/Header';
import Footer from '../components/Others/Footer/Footer';
import { Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;