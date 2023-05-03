import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import './ChefRec.css'

const ChefRecipies = () => {
    const recipes = useLoaderData();
    console.log(recipes)

    return (

        <Container className='mt-5 pt-2'>

            <div className="card mb-5 pb-3 w-75 mx-auto border-0 shadow">
                <img src={recipes.picture} className="img card-img-top p-3 rounded-lg" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold text-success">{recipes.name}</h5>
                    <p> <span className='fw-semibold'>{recipes.description}</span></p>

                    <p className="card-text">Experience: <span className='fw-semibold'>{recipes.experience} Years</span></p>
                    <p>Recipes Number: <span className='fw-semibold'>{recipes.num_recipes}</span></p>
                    <p>Peoples Reaction: <span className='fw-semibold'>{recipes.likes}</span></p>
                </div>
            </div>

            
        </Container>
    );
};

export default ChefRecipies;