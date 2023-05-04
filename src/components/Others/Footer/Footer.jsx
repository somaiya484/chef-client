import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container fluid>
            <div className='d-flex justify-content-between align-items-center bg-dark text-white py-2 px-3'>
                <div>
                    <p><small className='text-center fs-4'>Cookilious</small></p>
                </div>
                <div className='text-center px-4'>
                    <p><small>Follow us in social media <br />and post the picture of your food</small></p>
                </div>
                <div className='d-flex me-2 '>
                    <FaFacebookF className=' me-2'></FaFacebookF>
                    <FaInstagram className=' me-2'></FaInstagram>
                    <FaTwitter></FaTwitter>
                </div>
            </div>
        </Container>
    );
};

export default Footer;