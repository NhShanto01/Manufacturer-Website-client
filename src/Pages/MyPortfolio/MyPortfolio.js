import React from 'react';

const MyPortfolio = () => {
    return (
        <div>

            <div className='container grid grid-cols-1 lg:grid-cols-2 justify-content-center items-center gap-16 mx-auto '>
                <div>
                    <span className="text-3xl font-bold text-accent">MERN Stack Web Developer</span>
                    <h1 className="my-name">
                        Hello, I'm <span className='text-accent'>Nur Hossain Shanto</span>
                    </h1>
                    <p className="text-justify">
                        Passionate to work as a MERN Stack Web Developer for a software
                        firm where I can leverage my talents in Web Design, Front-End and
                        Back-End Web Development to give excellent customer service. <br />

                        I am skilled in HTML, CSS, Bootstrap, TailwindCSS, Javascript(ES6), and MERN (Mongo DB, Express, React, Node) stack.

                    </p>

                    <br />

                    <h3>Tools :</h3>
                    <p>VS Code, Chrome Dev-tool, Github, Figma</p>

                    <br />

                    <h3>Email Address :</h3>
                    <p className='hover:text-accent'>mdnurhossain940@gmail.com</p>
                </div>

                <div>
                    <img src="https://i.ibb.co/9tsn2J8/LRM-EXPORT-20180616-183847-2.jpg" alt="" className='w-2/4 my-12' />
                </div>

            </div>

            <div className='flex justify-around items-center gap-12'>
                <div>
                    <h3 className='mb-4'>My Educational Status :</h3>
                    <p>I took the HSC exam in December last year <br />
                        from Nawab Habibullah Model College.</p>

                </div>
                <div>
                    <h3 className='mb-4'>My Simple MERN Projects :</h3>
                    <p>Link-1 : <a className='hover:font-bold text-accent' href="https://edu-phillip.web.app/">(Edu-Philip)</a></p>
                    <p>Link-2 : <a className='hover:font-bold text-accent' href="https://sports-zone-8991a.web.app/">(Sports Zone)</a></p>
                    <p>Link-3 : <a className='hover:font-bold text-accent' href="https://auto-parts01.web.app/">(Auto-Parts)</a></p>
                </div>
            </div>

        </div>
    );
};

export default MyPortfolio;