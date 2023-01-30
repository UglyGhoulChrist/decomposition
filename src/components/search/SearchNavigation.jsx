import React from "react";

/**
 * @description Навигации блока поиска информации
 * @param {array} searchNavigation - заголовки навигации поиска
 * @return {HTMLElement} - HTML разметка списка навигации поиска
 */

function SearchNavigation({ searchNavigation }) {
  return (
    <div>
      {searchNavigation.map((el, idx) => (
        <button key={idx}>{el}</button>
      ))}
    </div>
  );
}
export default SearchNavigation;
