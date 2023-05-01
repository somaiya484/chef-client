import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/download-removebg-preview.png'
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand className='h1 ms-3' href="#"><img src={logo} alt="" />  Cooki<span>Lious</span> </Navbar.Brand>
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
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link> 
                        <Nav.Link href="#action1">Home</Nav.Link> 
                        <Nav.Link href="#action1">Home</Nav.Link> 
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;