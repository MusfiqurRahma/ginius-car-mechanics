import React from 'react';
import { Carousel } from 'react-bootstrap';
import caru1 from '../../../Images/carousel/Background (1).png';
import caru2 from '../../../Images/carousel/Background (2).png';
import caru3 from '../../../Images/carousel/Background.png';

const Banner = () => {
    return (
        <>
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={caru1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={caru2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={caru3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
        </>
    );
};

export default Banner;