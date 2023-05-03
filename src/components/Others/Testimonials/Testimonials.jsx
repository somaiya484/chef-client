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
        <Container className='pb-5'>
            <h2 className='text-center mt-5 pt-3 fs-1'>Testim<span className='text-success fw-bolder'>onilas</span></h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 text-center mt-3">
                <div className="col">
                    <div className="card shadow h-100 p-3 mb-5 bg-body-tertiary   border-0  border-0">
                        <div className="card-body">
                            <img className='w-25 rounded-circle' src={image1} alt="" />
                            <h5 className="card-title fw-semibold">John Smith</h5>
                            <h6 className="card-title text-success fw-bold">Bibimbap</h6>
                            <p className="card-text">The Bibimbap recipe on CookiLious was fantastic! The instructions were easy to follow and the end result was delicious. The combination of flavors and textures was perfect, and the dish looked beautiful as well. The website has a lot of other great recipes too, and I would highly recommend it to anyone interested in Korean cooking.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow h-100 p-3 mb-5 bg-body-tertiary rounded border-0">
                        <div className="card-body">
                            <img className='w-25 rounded-circle' src={image2} alt="" />
                            <h5 className="card-title fw-semibold">Samantha Lee</h5>
                            <h6 className="card-title text-success fw-bold">Sushi Platter</h6>
                            <p className="card-text">The Sushi Platter recipes were impressive with a wide variety of rolls. The fish was fresh and the presentation was beautiful. The only downside was that some of the rolls were a bit too saucy and overpowered the flavor of the fish. Overall, a great sushi-making experience</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow h-100 p-3 mb-5 bg-body-tertiary rounded border-0">
                        <div className="card-body">
                            <img className='w-25 rounded-circle' src={image3} alt="" />
                            <h5 className="card-title fw-semibold">Michael Johnson</h5>
                            <h6 className="card-title text-success fw-bold">Japchae</h6>
                            <p className="card-text">The Japchae recipe was good, but a bit complicated. The ingredients list was quite long and some of the steps were a bit confusing. However, the end result was tasty and authentic. The website has a lot of other great recipes too, and it's a good resource for anyone interested in Korean cuisine.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow h-100 p-3 mb-5 bg-body-tertiary rounded border-0">
                        <div className="card-body">
                            <img className='w-25 rounded-circle' src={image4} alt="" />
                            <h5 className="card-title fw-semibold">Emily Davis</h5>
                            <h6 className="card-title text-success fw-bold">Korean Fried Chicken</h6>
                            <p className="card-text">"The Korean Fried Chicken recipe was amazing! The chicken was crispy and flavorful, and the sauce was the perfect balance of sweet and spicy. The recipe was easy to follow and the end result was restaurant-quality. The website has a lot of other great recipes too, and I would highly recommend it to anyone looking to try their hand at Korean cooking.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow h-100 p-3 mb-5 bg-body-tertiary rounded border-0">
                        <div className="card-body">
                            <img className='w-25 rounded-circle' src={image5} alt="" />
                            <h5 className="card-title fw-semibold">David Kim</h5>
                            <h6 className="card-title text-success fw-bold">Galbi</h6>
                            <p className="card-text">The Galbi recipe was really good! The marinade was flavorful and the meat was tender and juicy. The recipe was easy to follow and the end result was delicious. The website has a lot of other great Korean recipes too, and it's a good resource for anyone interested in Korean cuisine</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow h-100 p-3 mb-5 bg-body-tertiary rounded border-0">
                        <div className="card-body">
                            <img className='w-25 rounded-circle ' src={image6} alt="" />
                            <h5 className="card-title fw-semibold">Sarah Lee</h5>
                            <h6 className="card-title text-success fw-bold">Dak Galbi</h6>
                            <p className="card-text">The ingredients and recipes of The Dak Galbi recipe was fantastic! The chicken was perfectly cooked and the vegetables were all fresh and crisp. I liked and enjoyed so much while making this recipes</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
};

export default Testimonials;