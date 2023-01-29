import React from "react";
import NewsStoryItem from "./NewsStoryItem";

/**
 * @description Список новостей
 * @param {array} newsList - список новостей
 * @return {HTMLElement} - HTML разметка списка новостей
 */

function NewsStoryList({ newsList }) {
  return (
    <ul style={{ listStyleType: "none" }}>
      {newsList.map((newsItem, index) => (
        <NewsStoryItem key={index} newsItem={newsItem} />
      ))}
    </ul>
  );
}

export default NewsStoryList;
