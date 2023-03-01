import { Projects } from '../Data/ProjectsData'

import ProjectCss from './Project.module.css'

const projectsSection = ProjectCss.projectsSection
const projectHeadingText = ProjectCss.projectHeadingText
const projectsWrapper = ProjectCss.projectsWrapper
const projects = ProjectCss.projects
const projectsImageWrapper = ProjectCss.projectsImageWrapper
const projectstext = ProjectCss.projectstext
const projectBtn = ProjectCss.projectBtn
const viewallBtn = ProjectCss.viewallBtn

const Projectheadingtext = "<> Projects </>"

const Project = () =>{
    return(
        <div className={projectsSection}>
            <h1 className={projectHeadingText}>{Projectheadingtext}</h1>
            <div className={projectsWrapper}>
                {Projects.map(({title, description, img, link}) =>{
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
                                    <a href={link} target="_blank">
                                        <button className='button'>Live</button>
                                    </a>
                                    <a href="" target='_blank'>
                                        <button>Repo</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <button className={"button " + viewallBtn}>View All</button>
        </div>
    )
}

export default Project