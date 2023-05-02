import React from 'react';
import './Home.css'
import About from '../Others/About/About';
import Testimonials from '../Others/Testimonials/Testimonials';
import { useLoaderData } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Home = () => {
    const reviews = useLoaderData();
    return (
        <div>
            <div className='home'>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h1 className='main-text mt-5 pt-5 px-3 fw-semibold'>No matter how you cook, <br /><span className='text-success fw-bolder'>CookiLious</span> has many<br></br> recipes</h1>
                    <p className='px-4 pt-3 fw-semibold pb-5 mb-5'>These are informative posts that provide readers with helpful cooking tips <br />  and techniques to make cooking easier, more efficient, and more enjoyable.<br /> Cooking tips can cover topics such as knife skills, meal prep, kitchen organization, and<br /> more.</p>
                </div>
            </div>
            <About></About>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;