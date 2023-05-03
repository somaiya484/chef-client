import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import './ChefRec.css'
import { FaStar } from 'react-icons/fa';

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

            <h3 className='text-center mb-3'>Here are some of my recipes.</h3>
            <div class="card mb-3 mx-auto w-75 mb-3">
                <div class="row g-0">
                    <div class="col-md-5">
                        <img src={recipes.recipe_img1} class="img-fluid rounded p-3 w-100" alt="..." />
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h5 className="card-title fw-bold">{recipes.recipe_name1}</h5>
                            <div><span className='text-success fw-semibold text-decoration-underline'>Ingredients:</span>
                                <ol>
                                    <li>{recipes.ingredients1[0]}</li>
                                    <li>{recipes.ingredients1[1]}</li>
                                    <li>{recipes.ingredients1[2]}</li>
                                    <li>{recipes.ingredients1[3]}</li>
                                    <li>{recipes.ingredients1[4]}</li>
                                </ol>
                            </div>

                            <p className="card-text"><span className='text-success fw-semibold text-decoration-underline'>Cooking Method:</span> <span className=''>{recipes.cooking_method1}</span></p>
                            <p className='d-flex justify-content-start align-items-center'><FaStar className='text-success me-1'></FaStar> <span className='fw-semibold'>{recipes.rating1}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 mx-auto w-75 mb-3">
                <div class="row g-0">
                    <div class="col-md-5">
                        <img src={recipes.recipe_img1} class="img-fluid rounded p-3 w-100" alt="..." />
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h5 className="card-title fw-bold">{recipes.recipe_name2}</h5>
                            <div><span className='text-success fw-semibold text-decoration-underline'>Ingredients:</span>
                                <ol>
                                    <li>{recipes.ingredients2[0]}</li>
                                    <li>{recipes.ingredients2[1]}</li>
                                    <li>{recipes.ingredients2[2]}</li>
                                    <li>{recipes.ingredients2[3]}</li>
                                    <li>{recipes.ingredients2[4]}</li>
                                </ol>
                            </div>

                            <p className="card-text"><span className='text-success fw-semibold text-decoration-underline'>Cooking Method:</span> <span className=''>{recipes.cooking_method2}</span></p>
                            <p className='d-flex justify-content-start align-items-center'><FaStar className='text-success me-1'></FaStar> <span className='fw-semibold'>{recipes.rating2}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 mx-auto w-75 mb-3">
                <div class="row g-0">
                    <div class="col-md-5">
                        <img src={recipes.recipe_img1} class="img-fluid rounded p-3 w-100" alt="..." />
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h5 className="card-title fw-bold">{recipes.recipe_name3}</h5>
                            <div><span className='text-success fw-semibold text-decoration-underline'>Ingredients:</span>
                                <ol>
                                    <li>{recipes.ingredients3[0]}</li>
                                    <li>{recipes.ingredients3[1]}</li>
                                    <li>{recipes.ingredients3[2]}</li>
                                    <li>{recipes.ingredients3[3]}</li>
                                    <li>{recipes.ingredients3[4]}</li>
                                </ol>
                            </div>

                            <p className="card-text"><span className='text-success fw-semibold text-decoration-underline'>Cooking Method:</span> <span className=''>{recipes.cooking_method3}</span></p>
                            <p className='d-flex justify-content-start align-items-center'><FaStar className='text-success me-1'></FaStar> <span className='fw-semibold'>{recipes.rating3}</span></p>
                        </div>
                    </div>
                </div>
            </div>


        </Container>
    );
};

export default ChefRecipies;