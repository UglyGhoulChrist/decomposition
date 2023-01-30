import React from "react";
import "./SearchForm.css";

/**
 * @description Форма поиска информации
 * @return {HTMLElement} - HTML разметка формы
 */

function SearchForm() {
  return (
    <div className="form">
      <input className="input" type="text" placeholder="Яндекс найдётся всё" />
      <button>Поиск</button>
    </div>
  );
}
export default SearchForm;
