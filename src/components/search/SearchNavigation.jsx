import React from "react";
import Button from "../ui/Button";

/**
 * @description Навигации блока поиска информации
 * @param {array} searchNavigation - заголовки навигации поиска
 * @return {HTMLElement} - HTML разметка списка навигации поиска
 */

function SearchNavigation({ searchNavigation }) {
  return (
    <ul className="list">
      {searchNavigation.map((el, idx) => (
        <li key={idx}>
          <Button text={el} classes="button" />
        </li>
      ))}
    </ul>
  );
}
export default SearchNavigation;
