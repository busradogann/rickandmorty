import React, { useState, useEffect, useContext } from "react";
import ReactPaginate from 'react-paginate'; 
import { Link } from "react-router-dom";

import Filter from '../filter/Filter';
import '../characters/characterList.scss';


const CharacterList = (props) => {
  const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState(1); 
    const [isLoaded, setisLoaded] = useState(false);
    const [currentPage, setcurrentPage] = useState(1); 

    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character?page=${currentPage}`,
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
        <div className="row pt-3">
          <h2 className="text-center pb-2">Characters</h2>
          <div className='col-lg-3 col-sm-12'>
            <Filter  />
          </div>
          <div className='col-lg-9 col-sm-12'>
            <ul className="characters">
              <div className="card-group">
                {data.map(item => (
                <div key={item.id} className="card" id="card">
                  <Link style={{ textDecoration: "none" }} to={`${item.id}`} key={item.id} className="">
                    <img src={item.image} className="card-img-top" alt="..."/>
                  </Link>
                  
                  {item.status ? 
                  <span className="badge rounded-pill bg-success">
                      {item.status}
                  </span>: 
                      ``
                  }

                  {/* badges */}
                  {(() => {
                    if (item.status === "Dead") {
                      return (
                        <div className={` position-absolute badge bg-danger`}>
                          {item.status}
                        </div>
                      );
                    } else if (item.status === "Alive") {
                      return (
                        <div className={` position-absolute badge bg-success`}>
                          {item.status}
                        </div>
                      );
                    } else {
                      return (
                        <div className={`position-absolute badge bg-secondary`}>
                          {item.status}
                        </div>
                      );
                    }
                  })()} 
                  
                  <div className="card-body">
                    <Link style={{ textDecoration: "none" }} to={`${item.id}`} key={item.id} className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark">
                      <h5 className="card-title">{item.name}</h5> 
                    </Link>

                    <p className="card-text">{item.species}</p>
                    <p className="card-text">{item.gender}</p>
                  </div>
                </div>
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
            </ul>
          </div>
        </div>
    );
  }
  
  export default CharacterList;
  