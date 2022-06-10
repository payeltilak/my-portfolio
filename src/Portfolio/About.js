import React from 'react';
import Image from '../Image/23809.jpg';

const About = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-violet-400 my-10 text-dark">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={Image} />
                    <div>
                        <h1 class="text-5xl font-bold">About Me</h1>
                        <p class="py-6">To work in an organization where discipline and a high-tech environment will ensure fast career development and the congenial atmosphere will enable to develop managerial qualities.Vision, positive attitude, interpersonal relational ship, communication skill to take challenges and commitment to achieve results.Always try my best to learn new things..</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;