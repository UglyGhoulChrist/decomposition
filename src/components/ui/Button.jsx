import React from "react";
import "./Button.css";

function Button({ text, classes, handleClick }) {
  return (
    <button className={classes} onClick={handleClick}>
      {text}
    </button>
  );
}
export default Button;
