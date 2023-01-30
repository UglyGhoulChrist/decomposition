import React from "react";
import NewsTabsItem from "./NewsTabsItem";

/**
 * @description Список табов блока новостей
 * @param {object} newsGroup - Группы новостей
 * @param {function} handleClick - Обработчик нажатия кнопки
 * @return {HTMLElement} - HTML разметка списка табов
 */

function NewsTabsList({ newsGroup, handleClick }) {
  return (
    <ul className="list">
      {newsGroup.map((el, idx) => (
        <NewsTabsItem
          handleClick={handleClick}
          key={idx}
          typeNews={el["group"]}
          idx={idx}
        />
      ))}
    </ul>
  );
}
export default NewsTabsList;
