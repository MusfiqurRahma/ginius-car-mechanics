import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { _id, name, price, description, img } = props.service;
    
    return (
        <div className='service p-3'>
            <img style={{width:'80%'}} src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p>Desc: {description}</p>
            <Link to={`/booking/${_id}`}>
            <button className='btn btn-warning'>Book {name}</button>
            </Link>
        </div>
    );
};
export default Service;