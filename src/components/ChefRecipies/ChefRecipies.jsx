import React from 'react';
import Header from '../Others/Header/Header';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipies = () => {
    // const {id} = useParams();
    // const ChefRecipes = useLoaderData();
    // console.log(ChefRecipes);
    // const { id } = useParams();
    // const chefInformation = useLoaderData();
    return (
        <div>
            <Header></Header>
            <div>
                {/* <h2>{chefInformation.length}</h2> */}
            </div>

        </div>
    );
};

export default ChefRecipies;