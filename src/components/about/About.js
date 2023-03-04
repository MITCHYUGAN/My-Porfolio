import React from 'react'
import AboutCss from './About.module.css'
import { Skills } from '../Data/SkillsData'

const about = AboutCss.about
const aboutHeading = AboutCss.aboutHeading
const aboutContents = AboutCss.aboutContents
const abouttext = AboutCss.abouttext
const abouttextflex = AboutCss.abouttextflex
const skills = AboutCss.skills
const skillButtons = AboutCss.skillButtons
const skill = AboutCss.skill

const aboutheading  = "<> About Me </>"

const About = () =>{
    return(
        <div className={about} id="about">
            <h1 className={aboutHeading}>{aboutheading}</h1>
            <div className={aboutContents}>
                <div className={abouttext}>
                    <h2>Get to know me!</h2>
                    <div className={abouttextflex}>
                        <p>
                            I'm a <span>Frontend Web Developer</span> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                        </p>
                        {/* <p>
                            I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming
                        </p> */}
                        <p>
                            I'm open to <span>Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span>contact</span> me.
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