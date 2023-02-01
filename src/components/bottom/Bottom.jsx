import React from "react";
import Block from "./Block";
import "./Bottom.css";
import { bottomSection } from "../../data/data.js";

/**
 * @description Нижний блок
 * @return  {HTMLElement} - HTML разметка нижнего блока
 */

function BottomSection() {
  return (
    <section className="bottom">
      {bottomSection.map((list, idx) => (
        <Block key={idx} {...list} />
      ))}
    </section>
  );
}
export default BottomSection;
