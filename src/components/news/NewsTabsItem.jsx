import React from "react";

/**
 * @description Элемент таба блока новостей
 * @param {string} typeNews - Тип новостей
 * @return {HTMLElement} - HTML разметка злемента таба блока новостей
 */

function NewsTabsItem({ typeNews }) {
  return <button>{typeNews}</button>;
}

export default NewsTabsItem;
