import React from "react";
import SearchForm from "./SearchForm";
import SearchNavigation from "./SearchNavigation";
import { searchNavigation } from "../../data/data.js";

/**
 * @description Блок поиска информации
 * @return {HTMLElement} - HTML разметка блока поиска
 */

function Search() {
  return (
    <div>
      <SearchNavigation searchNavigation={searchNavigation} />
      <SearchForm />
    </div>
  );
}

export default Search;
