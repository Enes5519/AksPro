import { createElement } from "react";
import clsx from "clsx";

const TableItem = ({ isHeader, children, className }) =>
  createElement(isHeader ? "th" : "td", { className: clsx("px-2.5", isHeader ? "py-3" : "py-4", className) }, children);

export default TableItem;
