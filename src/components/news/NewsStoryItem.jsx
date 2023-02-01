import React from "react";
import Link from "../UI/Link";

/**
 * @description Новость
 * @param {object} newsItem - новость
 * @return {HTMLElement} - HTML разметка новости
 */

function NewsStoryItem({ newsItem }) {
  return (
    <li>
      <Link {...newsItem} />
    </li>
  );
}

export default NewsStoryItem;
