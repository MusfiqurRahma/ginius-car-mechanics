import React from 'react';
import mechanic1 from '../../../Images/mechanic/Background (1).png';
import mechanic2 from '../../../Images/mechanic/Background (2).png';
import mechanic3 from '../../../Images/mechanic/Background (3).png';
import mechanic4 from '../../../Images/mechanic/Background (4).png';
import mechanic5 from '../../../Images/mechanic/Background.png';
import mechanic6 from '../../../Images/mechanic/Background (5).png';
import Expert from '../Expert/Expert';

const experts = [
    {
        img: mechanic1,
        name: 'Safina Hezzle',
        expertize: '-Engine Expertize-'
    },
    {
        img: mechanic2,
        name: 'Jon Enderson',
        expertize: '-Polish Expert-'
    },
    {
        img: mechanic3,
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-'
    },
    {
        img: mechanic4,
        name: 'Roney hamsburg',
        expertize: '-Engine Expertize-'
    },
    {
        img: mechanic5,
        name: 'Sakib Anderson',
        expertize: '-Allrounder Expert-'
    },
    {
        img: mechanic6,
        name: 'Mushi',
        expertize: '-Allrounder Expert-'
    },
];

const Experts = () => {
    return (
        <div className='container' id='experts'>
            <h2 className='text-primary'>Our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}>
                        </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;