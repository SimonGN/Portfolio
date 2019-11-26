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
              <FontP > {client}</FontP>
              <Button content="+" color="#F1A409" backgroundColor="#FCEDCE" />
              <FontP align="right" size="12px"> {stack}</FontP>
            </div>

        </ProjectStyle>
    );
};

export default Project;
