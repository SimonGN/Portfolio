import React, { useState } from "react";

import Project from "./Project"
import projectJson from "../../content/project.json"

const ProjectAll = () => {
    const displayProject = () => {
        return (
            projectJson.map((project) => {
                const {img, client, linkWeb, linkBehance, stack, type} = project;
                return(
                    <Project img={img} client={client} linkWeb={linkWeb} linkBehance={linkBehance}stack={stack} type={type}/>
                )
                })
            )
    }


    return (
        
            displayProject()
       
    );
};

export default ProjectAll;
