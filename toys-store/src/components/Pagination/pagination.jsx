import React from "react";
import s from "./pagination.module.css";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, onPageChange }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) {
    return null;
  }
  const pages = _.range(1, pageCount + 1);
  return (
    <nav>
      <ul className={s.pagination}>
        {pages.map((page) => (
          <li key={"page_" + page}>
            <button className={s.btn} onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
