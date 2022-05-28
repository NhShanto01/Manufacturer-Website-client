import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-primary bg-black">
                <div>
                    <span className="footer-title">Company</span>
                    <a href='/' className="link link-hover">Home</a>
                    <a href='/blogs' className="link link-hover">Blogs</a>
                    <a href='/portfolio' className="link link-hover">My Portfolio</a>
                    <a href='/contact' className="link link-hover">Contact</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href='/#' className="link link-hover">Terms of use</a>
                    <a href='/#' className="link link-hover">Privacy policy</a>
                    <a href='/#' className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <a href='/https://www.facebook.com/profile.php?id=100010318328703' className="link link-hover">Facebook</a>
                    <a href='/https://github.com/NhShanto01' className="link link-hover">Github</a>
                    <a href='/https://www.linkedin.com/in/md-nur-hossain-shanto-983904229/' className="link link-hover">LinkedIn</a>
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