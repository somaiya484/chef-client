import React from 'react';
import { Container } from 'react-bootstrap';
import image1 from '../../../assets/image-4.png'
import image2 from '../../../assets/image1.png'
import image3 from '../../../assets/image-5.png'
import image4 from '../../../assets/image-2.png'
import image5 from '../../../assets/image-6.png'
import image6 from '../../../assets/imag-6.jpg'


const Testimonials = () => {
    return (
        <Container>
            <h2 className='text-center mt-5 pt-3 fs-1'>Testim<span className='text-success fw-bolder'>onilas</span></h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 text-center mt-3">
                <div className="col">
                    <div className="card shadow h-100 p-3 mb-5 bg-body-tertiary   border-0  border-0">
                        <div className="card-body">
                            <img className='w-25 rounded-circle' src={image1} alt="" />
                            <h5 className="card-title fw-semibold">John Smith</h5>
                            <h6 className="card-title text-success fw-bold">Steak Frites</h6>
                            <p className="card-text">The Steak Frites was cooked to perfection with a beautiful sear on the outside and a juicy pink center. The fries were crispy and perfectly seasoned. The herb butter added a nice touch of flavor to the steak. The portion size was generous and worth the price.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow h-100 p-3 mb-5 bg-body-tertiary rounded border-0">
                        <div className="card-body">
                            <img className='w-25 rounded-circle' src={image2} alt="" />
                            <h5 className="card-title fw-semibold">Samantha Lee</h5>
                            <h6 className="card-title text-success fw-bold">Sushi Platter</h6>
                            <p className="card-text">The Sushi Platter was impressive with a wide variety of rolls. The fish was fresh and the presentation was beautiful. The only downside was that some of the rolls were a bit too saucy and overpowered the flavor of the fish. Overall, a great sushi experience</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow h-100 p-3 mb-5 bg-body-tertiary rounded border-0">
                        <div className="card-body">
                            <img className='w-25 rounded-circle' src={image3} alt="" />
                            <h5 className="card-title fw-semibold">Michael Johnson</h5>
                            <h6 className="card-title text-success fw-bold">Butter Chicken</h6>
                            <p className="card-text">The Butter Chicken had a great balance of spice and creaminess. The naan bread was fresh and fluffy. However, the portion size was a bit small for the price. Would have liked more chicken in the dish.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow h-100 p-3 mb-5 bg-body-tertiary rounded border-0">
                        <div className="card-body">
                            <img className='w-25 rounded-circle' src={image4} alt="" />
                            <h5 className="card-title fw-semibold">Emily Davis</h5>
                            <h6 className="card-title text-success fw-bold">Avocado Toast</h6>
                            <p className="card-text">The Avocado Toast was good, but nothing special. The bread was a bit too thick and dense for my liking. The avocado was fresh and mashed well. The poached egg was cooked perfectly, but the dish could have benefited from a bit more seasoning.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow h-100 p-3 mb-5 bg-body-tertiary rounded border-0">
                        <div className="card-body">
                            <img className='w-25 rounded-circle' src={image5} alt="" />
                            <h5 className="card-title fw-semibold">David Kim</h5>
                            <h6 className="card-title text-success fw-bold">Pad See Ew</h6>
                            <p className="card-text">The Pad See Ew was amazing. The noodles were perfectly cooked with a nice chewy texture. The beef was tender and the vegetables were cooked just right. The sauce was flavorful and not too sweet. Would highly recommend.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow h-100 p-3 mb-5 bg-body-tertiary rounded border-0">
                        <div className="card-body">
                            <img className='w-25 rounded-circle ' src={image6} alt="" />
                            <h5 className="card-title fw-semibold">Sarah Lee</h5>
                            <h6 className="card-title text-success fw-bold">Margherita Pizza</h6>
                            <p className="card-text">The Margherita Pizza was delicious with a crispy crust and fresh tomato sauce. The mozzarella cheese was perfectly melted. However, the pizza was a bit greasy and could have used a bit more seasoning. Overall, a good pizza option.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
};

export default Testimonials;