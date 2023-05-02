import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import slide1 from '../../../assets/slide-1.jpg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Registration = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        const photo = form.photo.value;
        if(password.length < 6){
            setError("The password is less than 6 characters")
        }

        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);
            setError('');
            event.target.reset()
        })
        .catch(error =>{
            setError('The password is less than 6 characters');
        })
    }

    return (
        <Container className='mt-5 pt-5 h-100'>
            <div className="card mb-3">
                <div className="row g-0 text-center">
                    <div className="col-md-6">
                        <div className="card-body  py-4">
                            <form onSubmit={handleRegister} className='d-flex flex-column justify-content-center align-items-center mt-5'>
                                <input className=' mb-4 w-75 py-3 px-2 border-0 shadow' type="text" placeholder=' Your name' name='name' required />
                                <input className=' mb-4 w-75 py-3 px-2 border-0 shadow' type="email" placeholder=' Email' name='email' required />
                                <input className=' mb-4 w-75 py-3 px-2 border-0 shadow' type="password" placeholder='Password' name='password' required />
                                <p className='text-danger'>{error}</p>

                                <input className=' mb-4 w-75 py-3 px-2 border-0 shadow' type="text" placeholder='Photo URL' name='photo' required />

                                <button className=' mb-4 btn btn-success w-25 py-2' >Register</button>
                                {/* <submit ></submit> */}
                                <p>Already Have An Account ? Then<Link className='text-success' to="/login"> LogIn </Link> </p>

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

export default Registration;