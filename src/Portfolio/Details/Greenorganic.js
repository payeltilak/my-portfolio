import React from 'react';

const Greenorganic = () => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src="https://i.ibb.co/sP7bNWX/Screenshot-2022-06-11-014034.png" alt="Shoes" /></figure>
                <figure><img src="https://i.ibb.co/B4sqLwB/Screenshot-2022-06-11-014136.png" alt="Shoes" /></figure>
                <figure><img src="https://i.ibb.co/Mkw6c0M/Screenshot-2022-06-11-014207.png" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title font-bold text-3xl text-orange-700">GREENORGANIC</h2>
                    <p className='font-bold '>
                        Wirehouse Management based website.<br/> User Authentication,Responsive for mobile,User can add product,delete product,update product. <br/>

                        <h2 className='font-bold text-1xl text-sky-600'>Used Technology :HTML5,CSS3,Daisy Ui,react router,Node,Express,Firebase,Heroku,Github</h2>
                   </p>
                    <div class="card-actions justify-end">
                        <a href='https://github.com/payeltilak/greenorganic-website' class="btn btn-black">Github</a>
                        <a href='https://greenorganic-fruits-vegitable.web.app/' target='_blank' class="btn btn-primary">Live Site</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Greenorganic;