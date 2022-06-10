import React from 'react';
import pic_1 from '../Image/pic-1.webp';
import pic_4 from '../Image/pic-4.webp';
import pic_2 from '../Image/Pic-2.webp';

const Services = () => {
    return (
        <div id='services' className='row my-20'>
            <h2 className='text-center text-4xl font-bold p-5'>My Services</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div class="card w-96 bg-stone-900 shadow-2xl ">
                    <figure class="px-10 pt-10">
                        <img src={pic_1} class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-slate-100 font-bold">Plain HTML CSS & BOOTSTRAP</h2>
                        <p className='text-slate-100 font-bold'>I can create  website perfect fully responsive with html css & Bootstrap . </p>
                        
                    </div>
                </div>
                <div class="card w-96 shadow-2xl bg-stone-900">
                    <figure class="px-10 pt-10">
                        <img src={pic_4} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-slate-100 font-bold">Javascript & React</h2>
                        <p className='text-slate-100 font-bold'>React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. I can create react.js & JavaScript website perfect fully.  </p>
                        
                    </div>
                </div>
                <div class="card w-96  shadow-2xl bg-stone-900">
                    <figure class="px-10 pt-10">
                        <img src={pic_2} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-slate-100 font-bold">MERN Stack Web Application</h2>
                        <p className='text-slate-100 font-bold'>I can Develop a full stack web app using MongoDb,Express,Jwt,With Autentication.</p>
                        
                    </div>
                </div>
                
                
                
            </div>
        </div>
    );
};

export default Services;