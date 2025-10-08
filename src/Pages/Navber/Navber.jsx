import React from 'react';
import { Link, NavLink } from 'react-router';
import navimage from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";

const Navber = () => {

    return (
        <div>
            <div className="navbar bg-base-100 px-8   shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink className='text-xl font-medium' to={'/'}  >Home</NavLink></li>
                            <li><NavLink className='text-xl font-medium' to={'Apps'}>Apps</NavLink></li>
                            <li><NavLink className='text-xl font-medium' to={'install'}>Installation</NavLink></li>

                        </ul>
                    </div>
                    <Link to={'/'} className=" text-xl font-bold flex items-center text-blue-600"><span><img className='w-14' src={navimage} alt="" /> </span> HERO.IO</Link >
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'Apps'}>Apps</NavLink></li>
                        <li><NavLink to={'install'}>Installation</NavLink></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='https://github.com/omor244' target='_blank' className="btn bg-[#632EE3] px-5 py-5 text-white text-sm flex items-center"> <span className='text-xl'><FaGithub /></span> Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default Navber;