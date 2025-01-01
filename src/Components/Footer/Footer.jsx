import React from 'react';

const Footer = () => {
    return (
        <div className=' my-5'>
            <footer className="bg-base-200 text-base-content p-10 rounded-xl">
    <div className=' text-center p-8 border-b-2 mb-5'>
    <h2 className=' text-3xl font-bold mb-3'>Gadget Heaven</h2>
    <p className=' text-gray-600'>Leading the way in cutting-edge technology and innovation.</p>
    </div >
        <div className=' flex justify-around'>
        <nav className=' flex flex-col'>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className=' flex flex-col'>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className=' flex flex-col'>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
        </div>
</footer>
        </div>
    );
};

export default Footer;