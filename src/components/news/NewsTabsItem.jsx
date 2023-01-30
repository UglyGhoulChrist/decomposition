import React from "react";
import Button from "../ui/Button";

/**
 * @description Таб блока новостей
 * @param {string} typeNews - Тип новостей
 * @param {number} idx - Индекс для переключения активной группы новостей
 * @param {function} handleClick - Обработчик нажатия кнопки
 * @return {HTMLElement} - HTML разметка таба
 */

function NewsTabsItem({ typeNews, idx, handleClick }) {
  return (
    <li>
      <Button text={typeNews} classes="button" handleClick={handleClick} />
    </li>
  );
}

export default NewsTabsItem;
