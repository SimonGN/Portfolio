import React, { useState } from "react";

import Link from "next/link";
import Button from "../Button/Button";

import { ProjectStyle } from "./ProjectStyle";

import FontP from "../../styles/fontsStyles/fontP";

const Project = ({img, client, linkWeb, linkBehance, stack, type}) => {


    return (
        <ProjectStyle  >
            <img  src={img} />
            <div className="img">
                
            </div>
            <div className="info">
                <div>
                <FontP> {client}</FontP>
                <FontP align="right" size="15px"> {stack}</FontP>
                </div>
              
              <Button content="+" color="#F1A409" backgroundColor="#FCEDCE" />
              
            </div>

        </ProjectStyle>
    );
};

export default Project;
