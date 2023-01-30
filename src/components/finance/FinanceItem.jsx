import React from "react";

/**
 * @description Курс валюты
 * @param {object} currency - Курс валюты
 * @return {HTMLElement} - HTML разметка
 */

function FinanceItem({ currency }) {
  return (
    <div>
      {currency.name} <span>{currency.course}</span>
      <span style={{ fontSize: ".7rem", color: "red" }}>
        {currency.increment}
      </span>
    </div>
  );
}
export default FinanceItem;
