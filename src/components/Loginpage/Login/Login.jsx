import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Login.css'
import slide1 from '../../../assets/loginimage.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import ChefRecipies from '../../Others/Chef/ChefRecipies';
import { GithubAuthProvider, GoogleAuthProvider, ProviderId, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';

const Login = () => {
    const [user, setUser] = useState({});
    const auth = getAuth(app);
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if (!password) {
            setError('Email or Password does not match')
        }

        signIn(email, password)
            .then(result => {
                setError('');
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/home')
                event.target.reset()
            })
            .catch(error => {
                setError('Email or Password does not match');
            })
    }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user1 = result.user;
                setUser(user1)
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }

    const githubProvider = new GithubAuthProvider();
    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {   
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                const errorMessage = error.message
            });
    }

    return (
        <Container className='mt-5 pt-5 h-100'>
            <div className="card mb-5 pb-5 border-0 shadow">
                <div className="row g-0 text-center">
                    <div className="col-md-6 ">
                        <div className="card-body  py-4  ">
                            <form onSubmit={handleLogin} className='d-flex flex-column justify-content-center align-items-center mt-5'>
                                <input className=' mb-4 w-75 py-3 px-2 border-0 shadow' type="email" placeholder='Enter Your Email' name='email' required />
                                <input className=' mb-4 w-75 py-3 px-2 border-0 shadow' type="password" placeholder='Enter Your Password' name='password' required />
                                <p className='text-danger'>{error}</p>
                                <button className=' mb-4 btn btn-success w-25 py-2' >Login</button>
                                <p>Don't Have An Account <Link className='text-success' to="/register">Register</Link> </p>

                                <p><small>or</small></p>

                                <button onClick={handleGoogleLogin} className=' mb-4 btn btn-success w-25 py-2 w-50 bg-transparent text-black' >Login With Google</button>
                                <button onClick={handleGithubLogin} className=' mb-4 btn btn-success w-25 py-2  w-50 bg-transparent text-black' >Login With Github</button>
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