import React from 'react';
import About from './About';
import Banner from './Banner';

import './Home.CSS';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
        </div>
    );
};

export default Home;
