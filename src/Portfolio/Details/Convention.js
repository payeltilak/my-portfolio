import React from 'react';

const Convention = () => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src="https://i.ibb.co/KhjtmJn/Screenshot-2022-06-11-014728.png" alt="Shoes" /></figure>
                <figure><img src="https://i.ibb.co/BjZn51T/Screenshot-2022-06-11-014745.png" alt="Shoes" /></figure>
                <figure><img src="https://i.ibb.co/RGFGCLz/Screenshot-2022-06-11-014757.png" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title font-bold text-3xl text-orange-700">CONVENTION CENTER</h2>
                    <p className='font-bold text-1xl'>It is Convention Based website. It has uses bootstrap and html. Is is also responsive for desktop and mobile</p>
                    <div class="card-actions justify-end">
                        <a href='https://github.com/payeltilak/convention-center-website' class="btn btn-black">Github</a>
                        <a href='https://gracious-brown-4aa738.netlify.app/' target='_blank' class="btn btn-primary">Live Site</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Convention;