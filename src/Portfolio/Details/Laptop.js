import React from 'react';

const Laptop = () => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/rdRQ3tw/Screenshot-2022-06-11-014404.png" alt="Shoes" /></figure>
                <figure><img src="https://i.ibb.co/H43Hgs9/Screenshot-2022-06-11-014420.png" alt="Shoes" /></figure>
                <figure><img src="https://i.ibb.co/rcPg1d5/Screenshot-2022-06-11-014458.png" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title font-bold text-3xl">LAPTOP</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
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