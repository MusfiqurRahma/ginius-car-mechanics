import React from 'react';

const Expert = ({ expert }) => {
    const { name,img,expertize } = expert;
    return (
        <div className='col-lg-4 col-md-6 col-12 col-sm-12'>
            <img className='w-100' src={img} alt="" />
            <h3 className='text-secondary'>Name: {name}</h3>
            <h6 className='text-danger'>Expertize: {expertize}</h6>
        </div>
    );
};

export default Expert;