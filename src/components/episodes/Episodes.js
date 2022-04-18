import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate'; 
import { Link } from "react-router-dom";

import './episodes.scss';


const Episodes = () => {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(1); 
  const [isLoaded, setisLoaded] = useState(false);
  const [currentPage, setcurrentPage] = useState(1); 

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/episode?page=${currentPage}`,
      );
      const json = await res.json();
      setData(json.results);

      setPageCount(json.info.pages);
      setisLoaded(true); 
    };
    fetchData();
  }, [currentPage]);

  const handlePageChange = (selectedObject) => {
    setcurrentPage(selectedObject.selected + 1);
  };

  return (
    <div className="container">
      <h2 className="text-center mt-3 mb-3">
        <span className="text-warning">Episodes</span>
      </h2>
      <div className="list-group mb-5">
      {data.map(item => (
        <Link style={{ textDecoration: "none" }} to={`${item.id}`} key={item.id} className="list-group-item list-group-item-action list-group-item-dark">
          {item.name}
        </Link>
      ))}

      {isLoaded ? (
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName={'container paginate'}
          previousLinkClassName={'page'}
          breakClassName={'page'}
          nextLinkClassName={'page'}
          pageClassName={'page'}
          disabledClassNae={'disabled'}
          activeClassName={'active'}
          breakLabel="..."
          nextLabel=" >"
          previousLabel="< "
        />
      ) : (
        <div>Nothing to display</div>
        )} 
      </div>
    </div>
  )
}

export default Episodes;