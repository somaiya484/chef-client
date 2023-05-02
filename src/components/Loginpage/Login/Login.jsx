import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './Login.css'
import slide1 from '../../../assets/slide-1.jpg'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className='mt-5 pt-5 h-100'>
            <div className="card mb-3">
                <div className="row g-0 text-center">
                    <div className="col-md-6">
                        <div className="card-body  py-4">
                            <form className='d-flex flex-column justify-content-center align-items-center mt-5'>
                                <input className=' mb-4 w-75 py-3 px-2 border-0 shadow' type="email" placeholder='Enter Your Email' name='email' required/>
                                <input className=' mb-4 w-75 py-3 px-2 border-0 shadow' type="password" placeholder='Enter Your Password' name='password'required/>
                                <Button className=' mb-4 btn btn-success w-25 py-2' >Login</Button>
                                <Form.Text>Don't Have An Account <Link className='text-success'  to="/register">Register</Link> </Form.Text>

                                <p><small>or</small></p>



                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 siderbar">
                        <img src={slide1} className="img-fluid rounded w-100  h-100" alt="..."/>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;