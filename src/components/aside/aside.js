import React from 'react';
import './aside.css';

const Aside = () => {
    return (
        <div className="col-md-4" id="aside">
            <div className="text-center">
                <p>Hello! My name is  <strong>Denis Salvino</strong> and I have just successfully become a Full-Stack Developer.</p>
                <p>I recently completed <strong>Rice University's</strong> Full-Stack coding boot camp. </p>
                <p>Along with this portfolio page created out of React.js, I have also created many different applications throughout the program
                that utilizes my Full-Stack and have published them on Github.</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>The Browser</p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>JQuery</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div className="col">
                        <p>Dev Tools</p>
                        <ul>
                            <li>Heroku</li>
                            <li>Git</li>
                            <li>Github</li>
                        </ul>
                    </div>
                    <div className="col">
                        <p>API Interaction</p>
                        <ul>
                            <li>APIs</li>
                            <li>JSON</li>
                            <li>AJAX</li>
                            <li>Axios</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>Development</p>
                        <ul>
                            <li>React.js</li>
                            <li>PWAs</li>
                        </ul>
                    </div>
                    <div className="col">
                        <p>Databases</p>
                        <ul>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div className="col">
                        <p>Comp Sci</p>
                        <ul>
                            <li>Algorithms</li>
                            <li>Data Structures</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center container col">
                <p>Server Side</p>
                <ul style={
                    {
                        listStyleType: "none",
                        padding: 0
                    }}>
                    <li>Templating Engines</li>
                    <li>Sessions</li>
                    <li>Tests</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>RESTful APIs</li>
                    <li>MVC</li>
                    <li>Authentication</li>
                    <li>ORM (Sequelize/Mongoose)</li>
                </ul>
            </div>
            <div className="container contact-container">
                <p>contact me</p>
                <div id="contactInfo">
                    <a href="mailto:denis.salvino23@gmail.com" className="linkStyle asideLink">Email</a>
                    <a href="https://github.com/dsalvino" className="linkStyle asideLink">Github</a>
                    <a href="https://https://www.linkedin.com/in/denis-salvino23/" className="linkStyle asideLink">LinkedIn</a>
                    <a href="https://dsalvino.github.io/example_work_portfolio/" className="linkStyle asideLink">Portfolio</a>
                </div>
                <a href="https://github.com/dsalvino" id="portfolio" className="linkStyle asideLink">Resume</a>
            </div>
        </div>
    )
}

export default Aside;