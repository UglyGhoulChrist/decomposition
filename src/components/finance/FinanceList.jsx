import React from "react";
import { currencyList } from "../../data/data.js";
import FinanceItem from "./FinanceItem";

/**
 * @description Список курса валют
 * @return {HTMLElement} - HTML разметка списка курса валют
 */

function FinanceList() {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      {currencyList.map((currency, idx) => (
        <FinanceItem key={idx} currency={currency} />
      ))}
    </div>
  );
}
export default FinanceList;
