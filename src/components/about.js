// src/components/About.js
import React from 'react';
import Skills from './skills';
import Card from './card'; // Import the Card component
import './about.css'; // Import the CSS file for about section styles

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className='about-container'>
                <h2>About Me</h2>
                <h5>Software developer and lifelong learner</h5>
                <div className="about-content">
                    <p>
                        I am a passionate web developer with experience in building full-stack web applications using React, Django, and more.
                        I love learning new technologies and constantly improving my skills.
                    </p>
                    <div className="skills-list">
                        <span>JavaScript</span>
                        <span>React</span>
                        <span>Python</span>
                        <span>Django</span>
                        <span>CSS</span>
                    </div>
                </div>
                <div className="cards-container">
                    <Card
                        title="Education Background"
                        content="Bachelor of Science in Computer Science from the University of Dar es Salaam (UDSM), with a strong focus on software engineering and development."
                        imageUrl="https://res.cloudinary.com/dqvewferm/image/upload/v1726628111/PXL_20240704_101107672_nu325s.jpg"
                    />
                    <Card
                        title="Software Development Experience"
                        content="Experience in building web applications using React and Django. Proficient in full-stack development, including both frontend and backend technologies."
                        imageUrl="https://res.cloudinary.com/dqvewferm/image/upload/v1726630216/photo-1618477371303-b2a56f422d9e_is6ud3.webp"
                    />
                    <Card
                        title="Passion for Technology"
                        content="Avid learner of new technologies and trends in software development. Passionate about leveraging technology to solve problems and create innovative solutions."
                        imageUrl="https://res.cloudinary.com/dqvewferm/image/upload/c_crop,w_3072,h_4080/v1726630916/Food-After-Event-Photo-132_mqxqx5.jpg"
                    />
                </div>
                <Skills />
            </div>
            {/* Dimensions: 3072 × 4080 */}
        </section>
    );
};

export default About;
