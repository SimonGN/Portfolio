import React, { useState } from "react";
import { TextStyle } from "./TextStyle";

import Link from "next/link";

import FontH1 from "../../styles/fontsStyles/fonth1"
import FontP from "../../styles/fontsStyles/fontp"

import Button from "../Button/Button";


const Text = () => {
  const [view, setView] = useState(false);
  const handleOpen = () => {
    const value = !view;
    setView(value);
  };
  return (
    <TextStyle view={view}>
      <div className="mobile">
        <FontP size="40px" onClick={handleOpen} cursor={"true"}>Hola</FontP>

      </div>
      <nav>
        <div className="info">
          <div className="intro">
            <FontH1>Soy Simón G. Negrete. Trabajo como Director de Arte y Desarrollo. </FontH1>
            <FontP>Especializado en branding y producto, acompaño a clientes desde la conceptualización de la idea, pasando por el diseño e implementación en entornos online como offline. </FontP>
          </div>
          <div className="contact">
            <div className="phone">
              <FontP>Tel:</FontP>
              <a><FontP>679 206 202</FontP></a>
            </div>
            <div className="email">
              <FontP>Email:</FontP>
              <a><FontP>hi@simongnegrete.com</FontP></a>
            </div>
            <div className="social">
              <FontP>Social:</FontP>
              <div className="links">
                <Link href=""><FontP>Linkedin</FontP></Link>
                <FontP>|</FontP>
                <Link href=""><FontP>Github</FontP></Link>
                <FontP>|</FontP>
                <Link href=""><FontP>Behance</FontP></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="close">
          <FontP cursor={"true"} onClick={handleOpen}>X</FontP>
        </div>
        <div className="button">
          <Link href=""><Button content="Diseño" color="#F1A409" backgroundColor="#FCEDCE" /></Link>
          <Link href=""><Button content="Web" color="#F1A409" backgroundColor="#FCEDCE" /></Link>
        </div>
      </nav>

    </TextStyle>
  );
};

export default Text;