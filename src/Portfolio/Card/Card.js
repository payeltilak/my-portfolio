import React from 'react';
import monota from '.././../Image/screencapture-monota-cd720-web-app-2022-06-10-14_18_38.png'
import greenorganic from '../../Image/screencapture-greenorganic-fruits-vegitable-web-app-2022-06-10-14_16_24.png';
import laptop from '../../Image/screencapture-endearing-toffee-c817a5-netlify-app-home-2022-06-10-13_07_21.png'
import mobile from '../../Image/screencapture-hungry-edison-e37251-netlify-app-2022-06-10-13_08_27.png'
import convention from '../../Image/screencapture-gracious-brown-4aa738-netlify-app-2022-06-10-13_10_35.png';

const Card = () => {
    return (
        <div className='bg-teal-800'>
            <h2 className='font-bold text-3xl text-center py-5 text-white'>My Projects</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                <div className='transition-opacity'>
                    <div class="card w-96 bg-base-100 shadow-xl ">
                        <figure><img className='object-scale-down h-48 w-96' src={monota} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <a href='https://monota-cd720.web.app/' target='_blank' class="btn btn-primary">Details</a>
                                <button class="btn btn-black"></button>
                            </div>
                        </div>
                    </div>
</div>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='object-scale-down h-48 w-96
                    ' src={laptop} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Accept</button>
                            <button class="btn btn-black">Deny</button>
                        </div>
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='object-scale-down h-48 w-96' src={greenorganic} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Accept</button>
                            <button class="btn btn-black">Deny</button>
                        </div>
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='object-scale-down h-48 w-96' src={mobile} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Accept</button>
                            <button class="btn btn-black">Deny</button>
                        </div>
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='object-scale-down h-48 w-96' src={convention} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Accept</button>
                            <button class="btn btn-black">Deny</button>
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