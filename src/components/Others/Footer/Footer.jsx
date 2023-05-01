import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className='d-flex justify-content-between align-items-center bg-dark text-white py-2 px-5'>
                <div>
                    <p><small className='text-center'>Copyright- 2023FoodRecipesWebsite  </small></p>
                </div>
                <div className='d-flex me-2 '>
                    <FaFacebookF className=' me-2'></FaFacebookF>
                    <FaInstagram className=' me-2'></FaInstagram>
                    <FaTwitter></FaTwitter>
                </div>
            </div>
        </div>
    );
};

export default Footer;