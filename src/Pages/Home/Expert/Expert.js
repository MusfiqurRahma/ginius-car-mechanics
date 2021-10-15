import React from 'react';

const Expert = ({ expert }) => {
    const { name,img,expertize } = expert;
    return (
        <div className='col-lg-4 col-md-6 col-12 col-sm-12'>
            <img className='h-50' src={img} alt="" />
            <h3>Name: {name}</h3>
            <h5 className='text-danger'>Expertize: {expertize}</h5>
        </div>
    );
};

export default Expert;