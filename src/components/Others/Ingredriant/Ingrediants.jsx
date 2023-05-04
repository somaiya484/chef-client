import React from 'react';
import { Container } from 'react-bootstrap';
import kimchi from '../../../assets/kimchi.jpg'
import seuce from '../../../assets/sauce.webp'
import tofu from '../../../assets/Soon-Tofu.jpg'
import jeot from '../../../assets/jeot.jpg'
import seeds from '../../../assets/seeds.jpg'
import './Ingrediants.css'
import Marquee from "react-fast-marquee";

const Ingrediants = () => {
    return (
        <Container className=' mt-5 pt-5 text-center text-secondary'>
            <div>
                <h2 className='text-black text-center fs-1'>Some<span className='text-success fw-bolder'> Ingredients</span></h2>
                <p lassName=' mt-5 pt-3 text-secondary'>If you need, you can order some ingredients from our website</p>
            </div>

            <div class=" row row-cols-1 row-cols-md-5 mt-3 text-black">
                <Marquee pauseOnHover className='order g-4 '>
                    <div class="col">
                        <div class=" card h-100">
                            <img src={kimchi} class="card-img-top p-3 " />
                            <div class="card-body">
                                <h5 class="card-title">kimchi</h5>
                                <button className='btn btn-success bg-white text-black px-4 py-1'>Order</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={seuce} class="card-img-top p-3 " />
                            <div class="card-body">
                                <h5 class="card-title">Gochujang sauce</h5>
                                <button className='btn btn-success bg-white text-black px-4 py-1'>Order</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={tofu} class="card-img-top p-3 " />
                            <div class="card-body">
                                <h5 class="card-title">Fresh Tofu</h5>
                                <button className='btn btn-success bg-white text-black px-4 py-1'>Order</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={jeot} class="card-img-top p-3 " />
                            <div class="card-body">
                                <h5 class="card-title">Jeot Sauce</h5>
                                <button className='btn btn-success bg-white text-black px-4 py-1'>Order</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={seeds} class="card-img-top p-3 " />
                            <div class="card-body">
                                <h5 class="card-title">Gochujang Paste</h5>
                                <button className='btn btn-success bg-white text-black px-4 py-1'>Order</button>
                            </div>
                        </div>
                    </div>
                </Marquee>
            </div>
        </Container>
    );
};

export default Ingrediants;