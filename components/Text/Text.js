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
            <FontH1>Hola, soy Simón G. Negrete. Director de Arte, Ux&Ui y desarrollador.  </FontH1>
            <FontP>He creado proyectos para PYMES, Startups y Multinacionales durante más de 7 años. </FontP>
            <FontP>A principios de 2019 cofundé <a target="_blank"href="https://tailor-hub.com"> Tailor</a> donde desarrollamos productos digitales a medida. Tambien aporto mi granito de arena como instructor en <a target="_blank"href="https://www.ironhack.com/es"> IronHack Madrid</a> ayudando a formar nuevos profesionales =D.</FontP>
            <FontP>Si queréis colaborar, plantear algún proyecto, no dudéis en poneros en <a href="mailto:hi@simongnegrete.com"> Contacto</a>.</FontP>

          </div>
          <div className="contact">
            <div className="phone">
              <FontP>Tel:</FontP>
              <a href="tel:+34679-206-202"><FontP>679 206 202</FontP></a>
            </div>
            <div className="email">
              <FontP>Email:</FontP>
              <a href="mailto:hi@simongnegrete.com"><FontP>hi@simongnegrete.com</FontP></a>
            </div>
            <div className="social">
              <FontP>Social:</FontP>
              <div className="links">
                <a href="https://www.linkedin.com/in/simongnegrete/" target="_blank"><FontP>Linkedin</FontP></a>
                <FontP>|</FontP>
                <a href="https://github.com/SimonGN"target="_blank"><FontP>Github</FontP></a>
                <FontP>|</FontP>
                <a href="https://www.behance.net/simongnegrete"target="_blank"><FontP>Behance</FontP></a>
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