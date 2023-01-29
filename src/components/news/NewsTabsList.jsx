import React from "react";

/**
 * @description Список табов блока новостей
 * @param {object} props - props.children
 * @return {HTMLElement} - HTML разметка списка злемента таба блока новостей
 */

function NewsTabsList(props) {
  return <div>{props.children.map((el) => el)}</div>;
}
export default NewsTabsList;
