import React from 'react';
import Header from '../Others/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Others/Footer/Footer';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Header></Header>
            <Container className='my-5 py-5'>
                <div className='text-bg-light p-4 mb-4'>
                    <h2 className='text-success'> 1.What is the differences between uncontrolled and controlled components.</h2>
                    <h6>ANS: Uncontrolled components is a form element that stored it's own state internally and handle their own state management. <br /> And Controlled components refer to components that have their state and behavior controlled by the parent component. The difference between uncontrolled and controlled components is, uncontrolled component Maintains its internal state and controlled component doesn't</h6>
                </div>

                <div className='text-bg-light p-4 mb-4'>
                    <h2 className='text-success'>2.How to validate React props using PropTypes?</h2>
                    <h6>   ANS: A library called PropType is used for checking type props in components. propTypes is used for props validation, and it returns console warning <br /> if some of the props aren't using the correct type.React PropTypes validators <br />  i. any : The prop can be of any data type.
                        <br />  ii. bool : The prop should be a Boolean.
                        <br /> iii. number : The prop should be a number.
                        <br /> iv. string : The prop should be a string. <br /> And Many more.</h6>
                </div>

                <div  className='text-bg-light p-4 mb-4'>
                    <h2 className='text-success'> 3. What is the difference between nodejs and express js?</h2>
                    <h6>
                        ANS: Node.js is a runtime build components in JavaScript On V8 Javascript engine. It Execute the code on server site, building scalable application of network for Node.js. <br /> And  Express is a framework that sits on top of Node.js and helps us to handle requests and responses. IT provides robuts set of HTTP utilities methods and middleware.
                    </h6>
                </div>

                <div className='text-bg-light p-4 mb-4'>
                    <h2 className='text-success'> 4. What is a custom hook, and why will you create a custom hook?</h2>
                    <h6>
                        ANS:  Custom hooks is a JavaScript function whose are sharing logic and stateful behavior between components while utilizing the react hook api.  If there is a code in a component that someone want to extract, either for reuse elsewhere or to keep the component simpler. It also allowed to create modules, self-contained function.<br /> This Custom Hooks also used in connection to API, meaningful state, validation, etc etc. And create custom hooks reduce duplication, make code organized and also code reusability.
                    </h6>
                </div>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Blog;