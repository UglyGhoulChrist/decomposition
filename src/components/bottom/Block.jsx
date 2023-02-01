import React from "react";
import Item from "./Item";

/**
 * @description Блок
 * @param {string} group - название группы ссылок
 * @param {string} linkGroup - ссылка группы
 * @param {array} list - элементы группы
 * @return {HTMLElement} - HTML разметка группы
 */

function Block({ group, linkGroup, list }) {
  return (
    <div>
      <a href={linkGroup}>
        <h2>{group}</h2>
      </a>
      {list.map((item, idx) => (
        <Item key={idx} {...item} />
      ))}
    </div>
  );
}

export default Block;
