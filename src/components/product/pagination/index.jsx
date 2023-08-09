import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  setCurrentPage,
  updateFilteredProducts,
} from "../../../actions/productActions";

const Pagination = () => {
  const currentPage = useSelector((state) => state.products.currentPage);
  const dispatch = useDispatch();

  const handlePreviousPage = (e) => {
    e.preventDefault();
    dispatch(setCurrentPage(currentPage - 1));
    dispatch(updateFilteredProducts());
  };

  const handleNextPage = (e) => {
    e.preventDefault();
    dispatch(setCurrentPage(Math.min(currentPage + 1, 6)));
    dispatch(updateFilteredProducts());
  };

  const handleClickedPage = (e) => {
    e.preventDefault();
    dispatch(setCurrentPage(e.target.innerText));
    dispatch(updateFilteredProducts());
  };

  return (
    <nav aria-label="...">
      <ul className="pagination d-flex justify-content-center m-11">
        <li className="page-item">
          <a className="page-link " onClick={handlePreviousPage}>
            &laquo;
          </a>
        </li>
        <li className={`page-item ${currentPage == 1 && "active"}`}>
          <a className="page-link" href="#" onClick={handleClickedPage}>
            1
          </a>
        </li>
        <li
          className={`page-item ${currentPage == 2 && "active"}`}
          aria-current="page"
        >
          <a className="page-link" href="#" onClick={handleClickedPage}>
            2
          </a>
        </li>
        <li className={`page-item ${currentPage == 3 && "active"}`}>
          <a className="page-link" href="#" onClick={handleClickedPage}>
            3
          </a>
        </li>
        <li className={`page-item ${currentPage == 4 && "active"}`}>
          <a className="page-link" href="#" onClick={handleClickedPage}>
            4
          </a>
        </li>
        <li className={`page-item ${currentPage == 5 && "active"}`}>
          <a className="page-link" href="#" onClick={handleClickedPage}>
            5
          </a>
        </li>
        <li className={`page-item ${currentPage == 6 && "active"}`}>
          <a className="page-link" href="#" onClick={handleClickedPage}>
            6
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" onClick={handleNextPage} href="#">
            &raquo;
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
