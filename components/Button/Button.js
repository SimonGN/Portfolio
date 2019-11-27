import React, { useState } from "react";
import Link from "next/link";

import { ButtonStyle } from "./ButtonStyle";
import FontP from "../../styles/fontsStyles/fontP";

const Button = props => {


    return (
        <ButtonStyle >
            <FontP color={props.color} size={props.size}> {props.content}</FontP>   
        </ButtonStyle>
    );
};

export default Button;