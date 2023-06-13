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
const codeLink = ProjectDetailsCss.codeLink
const gitHubIcon = ProjectDetailsCss.gitHubIcon
const liveBtn = ProjectDetailsCss.liveBtn

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