/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ProjectDetails from './ProjectDetails'
import ProjectCss from './Project.module.css'

const projectsSection = ProjectCss.projectsSection
const projectHeadingText = ProjectCss.projectHeadingText
// const viewallBtn = ProjectCss.viewallBtn

const Projectheadingtext = "{ Projects }"

const Project = () =>{
    return(
        <div className={projectsSection} id="projects">
            <h1 className={projectHeadingText}>{Projectheadingtext}</h1>
            <ProjectDetails />
            {/* <a href="/allprojects">
                <button className={"button " + viewallBtn}>View All</button>
            </a> */}
        </div>
    )
}

export default Project