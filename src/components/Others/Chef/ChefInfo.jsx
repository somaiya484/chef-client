import React from 'react';
import  './chef.css'
import { Link, useLoaderData, useParams } from 'react-router-dom';


const ChefInfo = ({ info }) => {

    const { name, picture, experience, num_recipes, likes } = info
    return (
        <div>
            <div className="col ">
                <div className="card mb-3  border-0 shadow ">
                    <div className='w-100 h-50'>
                        <img src={picture} className="img card-img-top p-3 rounded-lg" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title fw-bold text-success">{name}</h5>
                        <p className="card-text">Experience: <span className='fw-semibold'>{experience} Years</span></p>
                        <p>Recipes Number: <span className='fw-semibold'>{num_recipes}</span></p>
                        <p>Peoples Reaction: <span className='fw-semibold'>{likes}</span></p>
                        {/* <button className='btn btn-success py-2'><Link to='/chefRecipies'>View Recipes</Link></button> */}
                        <Link to={`/chef/${chef.id}`}>
                            <button className='btn btn-success py-2'>View Details</button>
                        </Link>
                        
                    </div>
                </div>
            </div>

            {/* */}
        </div>
    );
};

export default ChefInfo;