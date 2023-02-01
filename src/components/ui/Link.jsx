import React from "react";
import "./Link.css";

/**
 * @description Ссылка с информацией
 * @param {string} title - название
 * @param {string} link - ссылка
 * @param {string} time - время
 * @param {string} icon - иконка
 * @return {HTMLElement} - HTML разметка ссылки
 */

function Link({ title, link, time = null, icon = null }) {
  return (
    <a className="link" href={link}>
      {time || icon || null}
      <h3>{title}</h3>
    </a>
  );
}
export default Link;
