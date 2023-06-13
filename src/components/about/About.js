import React from 'react'
import AboutCss from './About.module.css'
import { Skills } from '../Data/SkillsData'
import { Link } from "react-scroll"

const about = AboutCss.about
const aboutHeading = AboutCss.aboutHeading
const aboutContents = AboutCss.aboutContents
const abouttext = AboutCss.abouttext
const spanLinks = AboutCss.spanLinks
const abouttextflex = AboutCss.abouttextflex
const skills = AboutCss.skills
const skillButtons = AboutCss.skillButtons
const skill = AboutCss.skill

const aboutheading  = "{ About Me }"

const About = () =>{
    return(
        <div className={about} id="about">
            <h1 className={aboutHeading}>{aboutheading}</h1>
            <div className={aboutContents}>
                <div className={abouttext}>
                    <h2>Get to know me!</h2>
                    <div className={abouttextflex}>
                        <p>
                            I'm a <span>Frontend Web Developer</span> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my cool 
                            <span className={spanLinks}>
                                <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>
                                    Projects
                                </Link>
                            </span>
                        </p>
                        <p>
                            I'm open to <span>Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and tech stack then don't hesitate to 
                            <span className={spanLinks}>
                                <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
                                    contact
                                </Link>
                            </span> me.
                        </p>
                    </div>
                </div>
                
                <div className={skills}>
                    <h2>My Skills</h2>
                    <div className={skillButtons}>
                        {
                            Skills.map(({skills}) =>{
                                return(
                                    <button className={skill}>{skills}</button>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About