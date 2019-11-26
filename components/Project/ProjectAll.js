import React, { useState } from "react";

import Link from "next/link";
import Button from "../Button/Button";

// import { ProjectAllStyle } from "./ProjectAllStyle";

import FontP from "../../styles/fontsStyles/fontP";

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
