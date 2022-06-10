import React from 'react';
import Image from '../Image/23809.jpg';

const About = () => {
    return (
        <div className='bg-gray-900'>
            <div class="hero min-h-screen  my-10 text-dark">
                <div class="hero-content flex-col lg:flex-row-reverse ">
                    <img className=' rounded-full' src={Image} />
                    <div>
                        <h1 class="text-5xl font-bold text-white">About Me</h1>
                        <p class="py-6 text-white">To work in an organization where discipline and a high-tech environment will ensure fast career development and the congenial atmosphere will enable to develop managerial qualities.Vision, positive attitude, interpersonal relational ship, communication skill to take challenges and commitment to achieve results.Always try my best to learn new things.<br />
                            Web Development is my passion. I am a MERN stack web developer. I am very passionate about my work. I work with React smoothly and I am ready to help my company with my best. I have the experience to workgroups. Helping my mate is one of my qualities. So, I think I will be the best developer to anyone's company
                            I am familiar with REACT, NODEJS and Javascript programming languages and have proven to have exceptional problem solving skills.
                            .</p>
                        
                        <button className='transition ease-in-out delay-150 bg-indigo-600 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-full p-4 font-bold text-slate-300...'>My Resume</button>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;