import React from "react"
import Projects from "../Projects/ProjectDetails"
import Header from "../header/Header"
import Contact from "../Contact/Contact"
import AllProjectCss from "./Allprojects.module.css"

const projectHerosection = AllProjectCss.projectHerosection
const allProjects = AllProjectCss.allProjects


const AllProjects = () =>{
    return(
      <main>
          <Header />
          <section className={projectHerosection}>
            <h1>All Projects</h1>
          </section>
          <section className={allProjects}>
            <Projects />
          </section>
        <Contact />
      </main>
    )
}

export default AllProjects