import React from 'react';

const Mobile = () => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src="https://i.ibb.co/ynjL2yd/Screenshot-2022-06-11-014553.png" alt="Shoes" /></figure>
                <figure><img src="https://i.ibb.co/b5HGcz8/Screenshot-2022-06-11-014619.png" alt="Shoes" /></figure>
                <figure><img src="https://i.ibb.co/vVCX5yh/Screenshot-2022-06-11-014653.png" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title font-bold text-3xl text-orange-700">MOBILE SHOP</h2>
                    <p className='font-bold text-1xl text-sky-600'>Is has also uses javascript and API. Is is responsible for desktop and mobile.</p>
                    <div class="card-actions justify-end">
                        <a href='https://github.com/payeltilak/phone-hunter-website' class="btn btn-black">Github</a>
                        <a href='https://hungry-edison-e37251.netlify.app/' target='_blank' class="btn btn-primary">Live Site</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mobile;