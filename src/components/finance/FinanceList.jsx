import React from "react";
import { currencyList } from "../../data/data.js";
import FinanceItem from "./FinanceItem";
import "./FinanceList.css";

/**
 * @description Список курса валют
 * @return {HTMLElement} - HTML разметка списка курса валют
 */

function FinanceList() {
  return (
    <ul className="list">
      {currencyList.map((currency, idx) => (
        <FinanceItem key={idx} currency={currency} />
      ))}
    </ul>
  );
}
export default FinanceList;
