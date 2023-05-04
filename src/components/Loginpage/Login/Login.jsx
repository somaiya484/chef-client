import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Login.css'
import slide1 from '../../../assets/slide-1.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import ChefRecipies from '../../Others/Chef/ChefRecipies';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        if(!password){
            setError('Email or Password does not match')
        }

        signIn(email, password)
        .then(result =>{
            setError('');
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate('/chefRecipes/:id')
            event.target.reset()
        })
        .catch(error =>{
            setError('Email or Password does not match');
        })
    }

    return (
        <Container className='mt-5 pt-5 h-100'>
            <div className="card mb-5 pb-5">
                <div className="row g-0 text-center">
                    <div className="col-md-6">
                        <div className="card-body  py-4">
                            <form onSubmit={handleLogin} className='d-flex flex-column justify-content-center align-items-center mt-5'>
                                <input className=' mb-4 w-75 py-3 px-2 border-0 shadow' type="email" placeholder='Enter Your Email' name='email' required />
                                <input className=' mb-4 w-75 py-3 px-2 border-0 shadow' type="password" placeholder='Enter Your Password' name='password' required />
                                <p className='text-danger'>{error}</p>
                                <button className=' mb-4 btn btn-success w-25 py-2' >Login</button>
                                <p>Don't Have An Account <Link className='text-success' to="/register">Register</Link> </p>

                                <p><small>or</small></p>

                                <button className=' mb-4 btn btn-success w-25 py-2 w-50' >Login With Google</button>
                                <button className=' mb-4 btn btn-success w-25 py-2  w-50' >Login With Github</button>





                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 siderbar">
                        <img src={slide1} className="img-fluid rounded w-100  h-100" alt="..." />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;