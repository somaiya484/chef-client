import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../../src/assets/slide1.jpg'
import slide2 from '../../../src/assets/slide2.jpg'
import slide3 from '../../../src/assets/slide3.jpg'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h1 className='main-text mt-5 pt-5 px-3 fw-semibold'>No matter how you cook, <br /><span className='text-success fw-bolder'>CookiLious</span> has many<br></br> recipes</h1>
                <p className='px-5 fw-semibold'>These are informative posts that provide readers with helpful cooking tips <br />  and techniques to make cooking easier, more efficient, and more enjoyable.<br /> Cooking tips can cover topics such as knife skills, meal prep, kitchen organization, and<br /> more.</p>
            </div>
        </div>

        // <Carousel fade className='h-50'>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100"
        //             src={slide1}
        //             alt="First slide"
        //         />
        //         <Carousel.Caption>
        //             <h3>First slide label</h3>
        //             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100"
        //             src={slide2}
        //             alt="Second slide"
        //         />

        //         <Carousel.Caption>
        //             <h3>Second slide label</h3>
        //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100"
        //             src={slide3}
        //         />

        //         <Carousel.Caption>
        //             <h3>Third slide label</h3>
        //             <p>
        //                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        //             </p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        // </Carousel>
    );
};

export default Home;