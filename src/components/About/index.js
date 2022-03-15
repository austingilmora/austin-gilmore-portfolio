import React from "react";


function About() {
    return (
        <section className="container w-100">
            <div className="row">
                
                <img src="assets/images/me.jpg" className="col-12 col-md-6 col-lg-4 cover-pic" alt="cover" />
                <div className="col-sm-12 col-md-6 col-lg-8">
                    <h1 id="about">About Me</h1>
                    <p >
                        Hi, I'm Austin.
                    </p>
                    <p >
                        I'm a web developer. Originally from the US, I have been making my way all around the world for the past 5 or 6 years.
                        I've lived in 5 different countries and many more places inside of those countries. Living all around the world has definitely
                        been helped by my interest in learning new languages, speaking 4 different langauges at intermediate to fluent levels.
                        Now, I'm turning that affinity for learning new languages onto coding.
                    </p>
                    <p >
                        I’m an autonomous self-starter who is well-accustomed to working independently and remotely. Through my years of experience
                        teaching ESL, I have gained planning and project management skills, through creating and adjusting the curriculum to suit student
                        groups. I have also gained excellent written and verbal communication skills through learning to communicate effectively across language barriers.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default About;