import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import ChefInfo from './ChefInfo';
import './chef.css'

const Chef = () => {
    const [chefs, setChef] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.error(error))
    }, []);
    console.log(chefs)

    return (

        <Container>
            {/* <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 '>
                {
                    chefs.map(chef => (

                        <div key={chef.id} className="card w-96 bg-base-100 shadow-xl">

                            <figure className="px-10 pt-10">
                                <img src={chef.picture} key={chef.id} alt="chef" className="img rounded-xl h-52" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{chef.name} </h2>
                                <div>
                                    <p >Number of recipes: {chef.num_recipes}</p>
                                    <p >Year of experience: {chef.experience_years}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className='flex items-center'>  {chef.likes}</p>
                                    <Link to={`/chefRecipes/${chef.id}`}>
                                        <button className="btn btn-primary" >View Recipes</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                } */}

            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    chefs.map(chef => (
                        <div key={chef.id} className="">
                            <div className="col ">
                                <div className="card mb-3  border-0 shadow ">
                                    <div className='w-100 h-50'>
                                        <img src={chef.picture} className="img card-img-top p-3 rounded-lg" alt="..." />
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
            {/* </div> */}
        </Container>
    );
};

export default Chef;