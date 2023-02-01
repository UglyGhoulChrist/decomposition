import React from "react";
import Link from "../UI/Link";
/**
 * @description Элемент нижней секции
 * @param {array} props - props
 * @return {HTMLElement} - HTML разметка элемента
 */

function Item(props) {
  return <Link {...props} />;
}
export default Item;
