import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate'; 
import { Link } from 'react-router-dom';
import qs from 'qs';

import Filter from '../filter/Filter';
import StatusBadge from '../badges/StatusBadge';
import '../characters/characterList.scss';


/* CharacterList componenti karakterlerin listelenmesi için oluşturuldu. 
Filter componentinden varsa filtreleme bilgisini alarak karakterler getiriliyor. */

const CharacterList = () => {
    const [data, setData] = useState([]);
    const [filters, setFilters] = useState([]);
    const [pageCount, setPageCount] = useState(1); 
    const [isLoaded, setisLoaded] = useState(false);
    const [currentPage, setcurrentPage] = useState(1); 
    let parsedQuery = qs.stringify(filters);

    useEffect(() => {

      const fetchData = async () => {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character?page=${currentPage}&${parsedQuery}`,
        );
        const json = await res.json();
        setData(json.results);
  
        setPageCount(json.info.pages);
        setisLoaded(true); 
      };
      fetchData();
    }, [filters, currentPage, parsedQuery]);

    /* handlePageChange fonksiyonu sayfa geçişlerini sağlar. */
    const handlePageChange = (selectedObject) => {
		  setcurrentPage(selectedObject.selected + 1);
	  };

    return (
        <div className='row pt-3'>
          <h2 className='text-center pb-2'>Characters</h2>
          <div className='col-lg-3 col-sm-12'>
            <Filter setFilters={setFilters} />
          </div>
          <div className='col-lg-9 col-sm-12'>
            <ul className='characters'>
              <div className='card-group'>

                {data ? (
                  data.map(item => (
                    <div key={item.id} className='card' id='card'>
                      <Link style={{ textDecoration: 'none' }} to={`${item.id}`} key={item.id}>
                        <img src={item.image} className='card-img-top' alt={item.name} />
                      </Link>
  
                      <StatusBadge item={item} />
                      
                      <div className='card-body'>
                        <Link style={{ textDecoration: 'none' }} to={`${item.id}`} key={item.id} className='col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark'>
                          <h5 className='card-title'>{item.name}</h5> 
                        </Link>
  
                        <p className='card-text'>{item.species}</p>
                        <p className='card-text'>{item.gender}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>Character not found.</div>
                )}

                {isLoaded && data ? (
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
                    breakLabel='...'
                    nextLabel=' >'
                    previousLabel='< '
                  />
                ) : (
                  ''
                )} 
              </div>
            </ul>
          </div>
        </div>
    );
  }
  
  export default CharacterList;
  