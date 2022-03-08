import React from "react";
import mypic from "../../assets/images/me.jpg";

function About() {
    return (
        <section>
            <h1 id="about">About Me</h1>
            <img src={mypic} className="cover-pic" alt="cover" />
            <div>
            <p>
                Hi, I'm Austin.
            </p>
            <p>
                I'm a web developer. Originally from the US, I have been making my way all around the world for the past 5 or 6 years. 
                I've lived in 5 different countries and many more places inside of those countries. Living all around the world has definitely
                been helped by my interest in learning new languages, speaking 4 different langauges at intermediate to fluent levels.
                Now, I'm turning that affinity for learning new languages onto coding.
            </p>
            <p>
                I’m an autonomous self-starter who is well-accustomed to working independently and remotely. Through my years of experience 
                teaching ESL, I have gained planning and project management skills, through creating and adjusting the curriculum to suit student 
                groups. I have also gained excellent written and verbal communication skills through learning to communicate effectively across language barriers. 
            </p>
        </div>
        </section>
    );
}

export default About;