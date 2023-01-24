import { Projects } from '../Data/ProjectsData'

import ProjectCss from './Project.module.css'

const projectsSection = ProjectCss.projectsSection
const projectHeadingText = ProjectCss.projectHeadingText
const projectsWrapper = ProjectCss.projectsWrapper
const projects = ProjectCss.projects
const projectsImageWrapper = ProjectCss.projectsImageWrapper

const Project = () =>{
    return(
        <div className={projectsSection}>
            <h1 className={projectHeadingText}>Projects</h1>
            <div className={projectsWrapper}>
                {Projects.map(({title, description, img, }) =>{
                    return(
                        <div className={projects}>
                            <div className={projectsImageWrapper}>
                                <img src={img} alt="" />
                            </div>
                            <div>
                                <h1>{title}</h1>
                                <p>{description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Project