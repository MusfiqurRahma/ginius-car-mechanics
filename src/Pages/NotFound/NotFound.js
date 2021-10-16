import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../Images/404/2488755-ai.png';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%',border:'1px solid hotpink' }} src={notFound} alt="" />
            <Link to='/'> <button style={{backgroundColor:'hotpink'}}>Go Back</button></Link>
        </div>
    );
};

export default NotFound;