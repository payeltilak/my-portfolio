import React from 'react';
import About from '../Portfolio/About';
import Blog from '../Portfolio/Blog';
import Contact from '../Portfolio/Contact';
import Home from '../Portfolio/Home';
import Projects from '../Portfolio/Projects';
import Services from '../Portfolio/Services';

const AllComponents = () => {
    return (
        <div>
            <Home></Home>
            <About></About>
            <Projects></Projects>
            <Services></Services>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default AllComponents;