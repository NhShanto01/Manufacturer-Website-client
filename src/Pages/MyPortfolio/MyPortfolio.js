import React from 'react';

const MyPortfolio = () => {
    return (
        <div>

            <div className='flex justify-around items-center mx-auto gap-x-20'>
                <div>
                    <span className="text-2xl">MERN Stack Web Developer</span>
                    <h1 className="my-name">
                        Hello, I'm <span className='text-accent'>Nur Hossain Shanto</span>
                    </h1>
                    <p className="text-justify">
                        Passionate to work as a MERN Stack Web Developer for a software
                        firm where I can leverage my talents in Web Design, Front-End and
                        Back-End Web Development to give excellent customer service. <br />

                        I am skilled in HTML, CSS, Bootstrap, TailwindCSS, Javascript(ES6), and MERN (Mongo DB, Express, React, Node) stack.

                    </p><br />

                    <h3>Tools :</h3>
                    <p>VS Code, Chrome Dev-tool, Github, Figma</p>
                </div>

                <div>
                    <img src="https://i.ibb.co/9tsn2J8/LRM-EXPORT-20180616-183847-2.jpg" alt="" className='w-2/4 my-12' />
                </div>
            </div>
            <div>
                <h3>My Simple MERN Projects :</h3>
                <p>Link-1 : <a className='hover:font-bold text-accent' href="https://edu-phillip.web.app/">(Edu-Philip)</a></p>
                <p>Link-2 : <a className='hover:font-bold text-accent' href="https://sports-zone-8991a.web.app/">(Sports Zone)</a></p>
                <p>Link-3 : <a className='hover:font-bold text-accent' href="">(Auto-Parts)</a></p>
            </div>

        </div>
    );
};

export default MyPortfolio;