import React from 'react'
import { Projects } from '../Data/ProjectsData'
// import { Technologies } from '../Data/Technologies'
import ProjectDetailsCss from "./ProjectDetails.module.css"
import { FaGithub, FaEye } from "react-icons/fa";


const projectsWrapper = ProjectDetailsCss.projectsWrapper
const projects = ProjectDetailsCss.projects
const projectsImageWrapper = ProjectDetailsCss.projectsImageWrapper
const projectstext = ProjectDetailsCss.projectstext
const projectBtn = ProjectDetailsCss.projectBtn
// const technologies = ProjectDetailsCss.technologies
// const techWrapper = ProjectDetailsCss.techWrapper
const codeLink = ProjectDetailsCss.codeLink
const gitHubIcon = ProjectDetailsCss.gitHubIcon
const liveBtn = ProjectDetailsCss.liveBtn

// const technologiesHeading = "</> Technologies used:"

const ProjectDetails = () => {
    return(
        <section className={projectsWrapper}>
            {Projects.map(({title, description, img, link, repo,}) =>{
                    return(
                        <div className={projects}>
                            <div className={projectsImageWrapper}>
                                <img src={img} alt="" />
                            </div>
                            <div className={projectstext}>
                                <div className={projectstext}>
                                    <h1>{title}</h1>
                                    <p>{description}</p>
                                </div>
                                {/* <div className={technologies}>
                                    <h3>{technologiesHeading}</h3>
                                    <div className={techWrapper}>
                                        {
                                            Technologies.map(({tech, rank}) =>{
                                                if(rank === 1){
                                                    return(
                                                        <p>{tech}</p>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </div> */}
                                <div className={projectBtn}>
                                    <a href={link} target="_blank" className={`button ${liveBtn}`} rel="noopener noreferrer">
                                        <FaEye />
                                        <p>Live</p>
                                    </a>
                                    <a href={repo} target='_blank' className={codeLink} rel="noopener noreferrer">
                                        <FaGithub className={gitHubIcon} />                                        
                                        <p>Code</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </section>
    )
}

export default ProjectDetails