import React, { Children, useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

const privetRoute = () => {
    const {user, loading} = useContext(AuthContext);
    if(loading) {
        return <Spinner animation="border" variant="success" />
    }
    return <Navigate to="/login"></Navigate>

    return (
        <div>
            
        </div>
    );
};

export default privetRoute;