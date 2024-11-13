import React from "react";
import "./Button.css";

const Button = ({ text, type }) => {
    return <button className={`${type}`}>{text}</button>
}

export default Button;