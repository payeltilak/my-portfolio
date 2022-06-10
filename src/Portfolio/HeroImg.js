import React from 'react';

import Hero from '../Image/pexels-photo-1229861.webp'
import { Link } from 'react-router-dom';

const HeroImg = () => {
    return (
        <div className='hero text-white my-3 '>
            <div className="mask ">
                <img className='into-img h-full h-screen w-full h-screen ' src={Hero} alt="" />
            </div>
            <div className='content font-bold'>
                <h3>Hello, I am  Payel</h3>
                <h1>I am a Front-End Developer</h1>
                <div className='my-5'>
                    <Link to="/project" className='btn'>Projects</Link>

                    <Link to="/contact" className='btn btn-light mx-3'>Contact</Link>
                </div>
              </div>
           
        </div>
        
    );
};

export default HeroImg;