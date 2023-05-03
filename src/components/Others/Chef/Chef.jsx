import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefInfo from './ChefInfo';

const Chef = () => {
    const [chef, setChef] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.error(error))
    }, [])

    return (

        <Container>
            <h2 className='text-center mt-5 pt-5 fs-1'>Excellent <span className='text-success fw-bolder'>Chefs</span></h2>
            <div className="row row-cols-1 row-cols-md-3 g-4  ">
                {
                    chef.map(info => <ChefInfo
                        key={info.id}
                        info={info}

                    ></ChefInfo>)
                }
            </div>
        </Container>
    );
};

export default Chef;