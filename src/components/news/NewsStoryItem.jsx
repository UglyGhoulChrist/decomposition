import React from "react";

/**
 * @description Новость
 * @param {object} newsItem - новость
 * @return {HTMLElement} - HTML разметка новости
 */

function NewsStoryItem({ newsItem }) {
  return (
    <li>
      <a style={{ display: "flex", gap: "1rem" }} href={newsItem.link}>
        <span>{newsItem.icon}</span>
        <h3>{newsItem.title}</h3>
      </a>
    </li>
  );
}

export default NewsStoryItem;
