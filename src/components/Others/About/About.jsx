import React from 'react';
import { Container} from 'react-bootstrap';
import slide3 from '../../../assets/banner-1.jpeg'

const About = () => {
    return (
        <div className='container mb-5'>
            <h2 className='text-center mt-5 pt-3 fs-1'>About Cooki<span className='text-success fw-bolder'>Lious</span></h2>
            <div className="card mb-3  border-0 mt-4">
                <div className="row g-0 ">
                    <div className="col-md-6">
                        <img src={slide3} className="img-fluid rounded-start w-100 rounded" alt="..."/>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <p className="card-text fw-semibold mt-4">This website provide detailed posts or blogs about Korean Dishes, that include step-by-step instructions, photos, and a list of ingredients required to make a particular dish. Recipe posts can be categorized based on meal types, cuisine types, dietary restrictions, or special occasions.Here are some  informative posts that provide readers with helpful cooking tips and techniques to make cooking easier, more efficient, and more enjoyable. Cooking tips can cover topics such as knife skills, meal prep, kitchen organization, and more.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;