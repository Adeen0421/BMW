import React from 'react'

const About = () => {
    return (
        <div>
            <section className='about' style={{backgroundImage: "url(/a.jpg)"}}>
                <div className='about-content'>
                    <h2 className='fade-in'>About Us</h2>
                    <p>
                        Automated driving, electro-mobility, on-demand mobility and connectivity-mobility have never been so fascinating – and automobile advancement never so exciting and promising – as it is today. With BMW.com, the international website for BMW, we would like to create a platform that brings you closer to this fascination and the latest technological trends.
                    </p>
                    <p>
                        With content focusing on topics like mobility, stories of past and recent milestones, facts about historic, recent and future BMW models. Dive into these new worlds with us, get inspired, and experience something new, unusual and helpful every day.
                    </p>
                    <p>
                        At BMW.com – our digital interpretation of the sheer pleasure of driving. Experience the perfect blend of luxury, performance, and innovation that defines BMW's legacy of excellence in automotive engineering.
                    </p>
                </div>
                
                {/* Floating particles for visual effect */}
                <div className="about-particles">
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                </div>
            </section>
        </div>
    )
}

export default About;
 