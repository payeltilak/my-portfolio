import React from 'react';

const Monota = () => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src="https://i.ibb.co/X4f1tnf/Screenshot-2022-06-11-013605.png" alt="Shoes" /></figure>
                <figure><img src="https://i.ibb.co/nzTMtgZ/Screenshot-2022-06-11-013700.png" alt="Shoes" /></figure>
                <figure><img src="https://i.ibb.co/BLH5L16/Screenshot-2022-06-11-013812.png" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title font-bold text-3xl text-orange-700">MONOTA</h2>
                    <p className='font-bold text-1xl font-bold text-1xl text-sky-600 '> It is a Manufacturer based website. User Authentication,Responsive for mobile
                        Used authentication & Responsive for mobile & Desktop.
                        Separate Dashboard feature for user & admin & Credit Card payment for User .</p>
                    <div class="card-actions justify-end">
                        <a href='https://github.com/payeltilak/monota-website' class="btn btn-black">Github</a>
                        <a href='https://monota-cd720.web.app/' target='_blank' class="btn btn-primary">Live Site</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Monota;