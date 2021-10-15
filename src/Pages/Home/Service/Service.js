import React from 'react';
import './Service.css';

const Service = (props) => {
    const { name, price, desc, img } = props.service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p>Desc: {desc}</p>
        </div>
    );
};

export default Service;