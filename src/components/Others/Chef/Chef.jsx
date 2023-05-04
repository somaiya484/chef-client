import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import './chef.css'
import LazyLoad from 'react-lazy-load';

const Chef = () => {
    const [chefs, setChef] = useState([]);

    useEffect(() => {
        fetch('https://the-recipes-server-somaiyai342-gmailcom.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.error(error))
    }, []);
    console.log(chefs)

    return (

        <Container>
            <div className='text-center text-secondary'>
                <h2 className='text-center mt-5 pt-3 fs-1 text-black'>Awesome<span className='text-success fw-bolder'> CHEFS</span></h2>
                <p lassName='mt-5 pt-3 text-secondary '>Our Chefs will make your cooking process easy</p>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    chefs.map(chef => (
                        <div key={chef.id} className="">
                            <div className="col ">
                                <div className="card mb-3  border-0 shadow ">
                                    <div className='w-100 h-50'>
                                        <LazyLoad >
                                            <img src={chef.picture} className="img1 card-img-top p-3 rounded-lg" alt="..." />
                                        </LazyLoad>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold text-success">{chef.name}</h5>
                                        <p className="card-text">Experience: <span className='fw-semibold'>{chef.experience} Years</span></p>
                                        <p>Recipes Number: <span className='fw-semibold'>{chef.num_recipes}</span></p>
                                        <p>Peoples Reaction: <span className='fw-semibold'>{chef.likes}</span></p>
                                        {/* <button className='btn btn-success py-2'><Link to='/chefRecipies'>View Recipes</Link></button> */}
                                        <Link to={`/chefRecipes/${chef.id}`}>
                                            <button className='btn btn-success py-2'>View Details</button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Container>
    );
};

export default Chef;