import React from "react";

/**
 * @description Форма поиска информации
 * @return {HTMLElement} - HTML разметка формы
 */

function SearchForm() {
  return (
    <div>
      <input type="text" placeholder="Яндекс найдётся всё" />
      <button>Поиск</button>
    </div>
  );
}
export default SearchForm;
