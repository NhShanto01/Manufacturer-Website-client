import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-primary bg-black">
                <div>
                    <span className="footer-title">Company</span>
                    <a href='/#' className="link link-hover">Home</a>
                    <a href='/#' className="link link-hover">Blogs</a>
                    <a href='/#' className="link link-hover">About Us</a>
                    <a href='/#' className="link link-hover">My Portfolio</a>
                    <a href='/#' className="link link-hover">Contact</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href='/#' className="link link-hover">Terms of use</a>
                    <a href='/#' className="link link-hover">Privacy policy</a>
                    <a href='/#' className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <a href='/#' className="link link-hover">Facebook</a>
                    <a href='/#' className="link link-hover">Github</a>
                    <a href='/#' className="link link-hover">LinkedIn</a>
                </div>
            </footer>
            <footer className="footer mb-12 px-10 py-4 border-t bg-black text-base-content border-base-300">
                <footer className="footer footer-center p-4 bg-primary text-base-content">
                    <div>
                        <p>Copyright © 2022 - All right reserved.</p>
                    </div>
                </footer>
            </footer>
        </div>
    );
};

export default Footer;