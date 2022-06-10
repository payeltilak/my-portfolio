import React from 'react';
import About from './About';
import Banner from './Banner';

import './Home.CSS';
import Projects from './Projects';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Services></Services>
        </div>
    );
};

export default Home;
