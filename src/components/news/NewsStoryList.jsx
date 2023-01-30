import React from "react";
import NewsStoryItem from "./NewsStoryItem";

/**
 * @description Список новостей
 * @param {array} newsList - список новостей
 * @return {HTMLElement} - HTML разметка списка новостей
 */

function NewsStoryList({ newsList }) {
  return (
    <ul>
      {newsList?.list.map((el, idx) => (
        <NewsStoryItem key={idx} newsItem={el} />
      ))}
    </ul>
  );
}

export default NewsStoryList;
