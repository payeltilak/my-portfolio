import React from 'react';
import { Link } from 'react-router-dom';
import monota from '.././../Image/screencapture-monota-cd720-web-app-2022-06-10-14_18_38.png'
import greenorganic from '../../Image/screencapture-greenorganic-fruits-vegitable-web-app-2022-06-10-14_16_24.png';
import laptop from '../../Image/screencapture-endearing-toffee-c817a5-netlify-app-home-2022-06-10-13_07_21.png'
import mobile from '../../Image/screencapture-hungry-edison-e37251-netlify-app-2022-06-10-13_08_27.png'
import convention from '../../Image/screencapture-gracious-brown-4aa738-netlify-app-2022-06-10-13_10_35.png';


const Card = () => {
    return (
        <div className='mx-auto'>
            <h2 className='font-bold text-4xl text-center py-5 text-black'>My Projects</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                <div className='transition-opacity '>
                    <div class="card w-96 bg-base-100 shadow-xl bg-slate-900 ">
                        <figure><img className='object-scale-down h-48 w-96 ' src={monota} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title text-white">Monota</h2>
                            <p className='text-white'>
                                It is a Car Tools based website.
                                Used authentication & Responsive for mobile & Desktop.
                                Separate Dashboard feature for user & admin & Credit Card payment for User.

                            </p>
                            <div class="card-actions justify-end">
                                <a href='
https://github.com/payeltilak/monota-website' class="btn btn-black">Github</a>
                                <a href='https://monota-cd720.web.app/' target='_blank' class="btn btn-primary">Live Site</a>
                               
                                <Link to={`/monota`}><button className='btn btn-secondary font-bold mt-4'>Detail</button></Link>
                            </div>
                        </div>
                    </div>
</div>

                <div class="card w-96 bg-base-100 shadow-xl bg-slate-900">
                    <figure><img className='object-scale-down h-48 w-96
                    ' src={laptop} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-white">Laptop</h2>
                        <p className='text-white'>Is has uses react.js and javascript. It is responsive for Desktop and mobile. Is has many reviews for new laptop</p>
                        <div class="card-actions justify-end">
                            <a href='https://github.com/payeltilak/laptop-shop' class="btn btn-black">Github</a>
                            <a href="https://endearing-toffee-c817a5.netlify.app/home target='_blank' class=" target='_blank' className='btn btn-primary'>Live Site</a>

                            <button class="btn btn-black">Details</button>
                        </div>
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl bg-slate-900">
                    <figure><img className='object-scale-down h-48 w-96' src={greenorganic} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-white">Greenorganic</h2>
                        <p className='text-white'>Fruits & Vegetables sales based website.
                            One can get Contact with the warehouse virtually.
                            It is an admin base project &.an admin can add product & delete product.
</p>
                        <div class="card-actions justify-end">
                            <a href='https://github.com/payeltilak/greenorganic-website' class="btn btn-black">Github</a>
                            <a href='https://greenorganic-fruits-vegitable.web.app/' target='_blank' class="btn btn-primary">Live Site</a>

                            <button class="btn btn-black">Details</button>
                        </div>
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl bg-slate-900">
                    <figure><img className='object-scale-down h-48 w-96' src={mobile} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-white">My Mobile Shop</h2>
                        <p className='text-white'>Is has also uses  javascript and API. Is is responsible for desktop and mobile. </p>
                        <div class="card-actions justify-end">
                            <a href='https://github.com/payeltilak/phone-hunter-website' class="btn btn-black">Github</a>
                            <a href='https://hungry-edison-e37251.netlify.app/' target='_blank' class="btn btn-primary">Live Site</a>

                            <button class="btn btn-black">Details</button>
                        </div>
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl bg-slate-900">
                    <figure><img className='object-scale-down h-48 w-96' src={convention} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-white">Convention Center</h2>
                        <p className='text-white'>It is Convention Based website. It has uses bootstrap and html. Is is also responsive for desktop and mobile</p>
                        <div class="card-actions justify-end">
                            <a href='https://github.com/payeltilak/convention-center-website' class="btn btn-black">Github</a>
                            <a href='https://gracious-brown-4aa738.netlify.app/' target='_blank' class="btn btn-primary">Live Site</a>

                            <button class="btn btn-black">Details</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;

//  <div class="card w-96 glass">
//                     <figure><img className='w-52' src={monota} alt="car!" /></figure>
//                     <div class="card-body">
//                         <h2 class="card-title">Life hack</h2>
//                         <p>How to park your car at your garage?</p>
//                         <div class="card-actions justify-end">
//                             <button class="btn btn-primary">Learn now!</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="card w-96 glass">
//                     <figure><img  src={greenorganic} alt="car!" /></figure>
//                     <div class="card-body">
//                         <h2 class="card-title">Life hack</h2>
//                         <p>How to park your car at your garage?</p>
//                         <div class="card-actions justify-end">
//                             <button class="btn btn-primary">Learn now!</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="card w-96 glass">
//                     <figure><img src={convention} alt="car!" /></figure>
//                     <div class="card-body">
//                         <h2 class="card-title">Life hack</h2>
//                         <p>How to park your car at your garage?</p>
//                         <div class="card-actions justify-end">
//                             <button class="btn btn-primary">Learn now!</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="card w-96 glass">
//                     <figure><img src="https://api.lorem.space/image/car?w=400&h=225" alt="car!" /></figure>
//                     <div class="card-body">
//                         <h2 class="card-title">Life hack</h2>
//                         <p>How to park your car at your garage?</p>
//                         <div class="card-actions justify-end">
//                             <button class="btn btn-primary">Learn now!</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="card w-96 glass">
//                     <figure><img src="https://api.lorem.space/image/car?w=400&h=225" alt="car!" /></figure>
//                     <div class="card-body">
//                         <h2 class="card-title">Life hack</h2>
//                         <p>How to park your car at your garage?</p>
//                         <div class="card-actions justify-end">
//                             <button class="btn btn-primary">Learn now!</button>
//                         </div>
//                     </div>
//                 </div>