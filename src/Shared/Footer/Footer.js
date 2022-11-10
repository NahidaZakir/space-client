import React from 'react';
import logo from '../../Assets/logo.png';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="footer p-10 bg-violet-300 text-base-content">
            <div>
                <img className='footer-logo rounded' src={logo} alt=''></img>
                <p>Space Comany<br />Providing reliable service 2012</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Sofa Cleaning</a>
                <a className="link link-hover">Floor Cleaning</a>
                <a className="link link-hover">Bathroom Cleaning</a>
                <a className="link link-hover">Carpet Cleaning</a>
                <a className="link link-hover">Tank and Reservoir Cleaning</a>
                <a className="link link-hover">Disinfection service</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;