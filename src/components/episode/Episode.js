import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import Filter from '../filter/Filter';
import StatusBadge from '../badges/StatusBadge';


/* Episode componenti seçilen bölümdeki oyuncuların listelenmesi için oluşturuldu. */

const Episode = () => {
  let { id } = useParams();
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState([]);
  const [filters, setFilters] = useState([]);
  let { air_date, name } = info;
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let response = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );

      // const res = Object.values(response).filter(x => (x.status==filters.status) && (x.gender==filters.gender));
      const res = response.filter(
        obj => {
          if(filters.status !== undefined && filters.gender !== undefined && filters.species !== undefined) {
            return obj.status === filters.status && obj.gender === filters.gender && obj.species === filters.species;
          } else if (filters.species !== undefined && filters.gender !== undefined) {
            return obj.species === filters.species && obj.gender === filters.gender;
          } else if (filters.species !== undefined && filters.status !== undefined) {
            return obj.species === filters.species && obj.status === filters.status;
          } else if (filters.gender !== undefined && filters.status !== undefined) {
            return obj.gender === filters.gender && obj.status === filters.status;
          } else if (filters.status !== undefined) {
            return obj.status === filters.status;
          } else if (filters.gender !== undefined) {
            return obj.gender === filters.gender;
          } else if (filters.species !== undefined) {
            return obj.species === filters.species;
          } else {
            return obj;
          }
        }
      );
      setResults(res);
    })();
  }, [api, filters]);
  
  
  return (
    <div>
      <div className='container justify-content-center mb-5'>
        <div className='d-flex flex-column gap-3 mt-3 mb-3'>
          <h2 className='text-center mb-3'>
            <span className='text-dark'>Episode name :{' '}</span>
            <span className='text-warning'>{name === '' ? 'Unknown' : name}</span>
          </h2>
          <h5 className='text-center'>
            <span className='text-dark'>Air Date: {' '}</span>
            <span className='text-warning'>{air_date === '' ? 'Unknown' : air_date}</span>
          </h5>
        </div>

        <div className='row'>
          <div className='col-lg-3'>
            <Filter setFilters={setFilters} />
          </div>
          <div className='col-lg-9'>
            <ul className='characters'>
              <div className='card-group'>
              {results.map(item => (
                <div key={item.id} className='card' id='card'>
                <Link style={{ textDecoration: 'none' }} to={`/${item.id}`} key={item.id}>
                  <img src={item.image} className='card-img-top' alt={item.name}/>
                </Link>

                <StatusBadge item={item} />

                <div className='card-body'>
                  <Link style={{ textDecoration: 'none' }} to={`/${item.id}`} key={item.id} className='col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark'>
                    <h5 className='card-title'>{item.name}</h5> 
                  </Link>

                  <p className='card-text'>{item.species}</p>
                  <p className='card-text'>{item.gender}</p>
                </div>
                </div>
              ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episode;