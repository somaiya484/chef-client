import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/download-removebg-preview.png'
import './Header.css'
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand className='h1 fw-bold fs-3' href="#"><img src={logo} alt="" />  Cooki<span className='text-success fw-bolder'>Lious</span> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex ms-auto">
                        <Form.Control
                            type="search"
                            placeholder="Search Your Food"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                    <Nav
                        className=" mx-auto my-2 my-lg-0 "
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link   className='text-black fw-bold' href="#action1">Home</Nav.Link> 
                        <Nav.Link className='text-black fw-bold' href="#action1">Blog </Nav.Link> 
                        <Nav.Link className='text-black fw-bold' href="#action1">Home</Nav.Link> 
                        <Button className='btn' variant="success">Log In</Button>{' '}
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;