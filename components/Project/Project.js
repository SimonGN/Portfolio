import React, { useState } from "react";

import Link from "next/link";
import Button from "../Button/Button";

import { ProjectStyle } from "./ProjectStyle";

import FontP from "../../styles/fontsStyles/fontP";

const Project = ({ img, client, linkWeb, linkBehance, stack, typeDesign, typeWeb }) => {


    return (
        <ProjectStyle  >
            <img src={img} />
            <div className="img">

            </div>
            <div className="info">
                <div className="text">
                    <FontP> {client}</FontP>
                    <FontP align="right" size="15px"> {stack}</FontP>
                </div>
                <div className="button">
                    <Button content={typeDesign || typeWeb} color="#F1A409" backgroundColor="#FCEDCE" />
                    {!typeWeb &&<Button content="VER PROYECTO" color="#F1A409" backgroundColor="#FCEDCE" />}
                </div>


            </div>

        </ProjectStyle>
    );
};

export default Project;
