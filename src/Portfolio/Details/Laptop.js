import React from 'react';

const Laptop = () => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src="https://i.ibb.co/rdRQ3tw/Screenshot-2022-06-11-014404.png" alt="Shoes" /></figure>
                <figure><img src="https://i.ibb.co/H43Hgs9/Screenshot-2022-06-11-014420.png" alt="Shoes" /></figure>
                <figure><img src="https://i.ibb.co/rcPg1d5/Screenshot-2022-06-11-014458.png" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title font-bold text-3xl text-orange-700">Product Analysis</h2>
                    <p className='font-bold text-1xl font-bold text-1xl text-sky-600 '>Product Analysis based website.Dashboard containing Graph.In home page ,there are 3 reviews,but All reviews shown on another page.
                        Used Technology :HTML,CSS,Bootstrap,React router</p>
                    <div class="card-actions justify-end">
                        <a href='https://github.com/payeltilak/laptop-shop' class="btn btn-black">Github</a>
                        <a href="https://endearing-toffee-c817a5.netlify.app/home target='_blank' class=" target='_blank' className='btn btn-primary'>Live Site</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Laptop;