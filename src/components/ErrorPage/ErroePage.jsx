import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorimg from '../../assets/error.png'
import { Container } from 'react-bootstrap';

const Errorpage = () => {
  const { error, status } = useRouteError()
  return (
    <Container>
      <section className='d-flex flex-column align-items-center  p-4  text-danger'>
        <div>
          <img src={errorimg} className='w-100' alt="" />
        </div>
        <div className='container d-flex  align-items-center justify-content-center px-5 mx-auto mx-2'>
          <div className=' text-center'>
            <h2 className='mb-4 fw-bolder fs-3 text-danger'>
              <span className='sr-only'>Error</span> {status || 404}
            </h2>
            <p className='fs-1 fw-bold  mb-3'>
              {error?.message}
            </p>
            <Link
              to='/'
              className='px-4 py-3 fw-bold   text-success'
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Errorpage;