import React from "react";

/**
 * @description Курс валюты
 * @param {object} currency - Курс валюты
 * @return {HTMLElement} - HTML разметка
 */

function FinanceItem({ currency }) {
  return (
    <li>
      {currency.name} <span>{currency.course} </span>
      <span>{currency.increment}</span>
    </li>
  );
}
export default FinanceItem;
