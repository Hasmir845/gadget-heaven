import React, { useContext } from 'react';
import { CiHeart } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../Context/UseContext';

const Navbar = () => {
    const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/statistics'>Statistics</NavLink></li>
    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    </>
    const {cart, wishlist} = useContext(AppContext)
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <div className=' flex flex-col gap-1'>
        {links}
        </div>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-2">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn rounded-full text-xl bg-white"><IoCartOutline></IoCartOutline></button>
    
      {
      cart.length > 0 && (
        <span className="absolute top-6 right-40 bg-purple-500 text-white text-sm font-bold rounded-full px-2">
            {cart.length}
        </span>
    )}
    
    <button className="btn ml-3 rounded-full text-xl bg-white"><CiHeart></CiHeart></button>
    {
      wishlist.length > 0 && (
        <span className="absolute top-6 right-42 bg-purple-500 text-white text-sm font-bold rounded-full px-2">
            {wishlist.length}
        </span>
    )}
  </div>
</div>
    );
};

export default Navbar;