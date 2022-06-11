import React from 'react';
import { Link } from "react-scroll";


const Navbar = () => {
    const menuItems = <>
        {/* <li><Link activeClass="active" className='' to="home">Home</Link></li>

        <li><Link spy={true} smooth={true} to="about">About</Link></li>

        <li><Link spy={true} smooth={true} to="services">Services</Link></li>

        <li><Link spy={true} smooth={true} to="projects"><a href="#projects">Projects</a></Link></li>

        <li><Link spy={true} smooth={true} to="contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>     */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><a href={'#projects'}>Project</a></li>
        <li><a href={'#services'}>Services</a></li>
        <li><a href={'#about'}>About</a></li>
        <li><a href={'#contact'}>Contact</a></li>
    </>
    return (
        <div class="navbar bg-stone-900">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 font-bold text-white bg-stone-900">
                       {menuItems}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-2xl font-bold text-white">Portfolio</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0 font-bold text-white">
                    {menuItems}
                </ul>
            </div>
            <div class="navbar-end">
                <a href="https://drive.google.com/file/d/1quvTkaySaqZ-MwJAfc6kRZS42cWzeq9D/view?usp=sharing" target="_blank" className='btn btn-black' >Resume Download</a>
            </div>
        </div>
    );
};

export default Navbar;