import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Character = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species, episode } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div>
      <div className='container d-flex justify-content-center mb-5 mt-5'>
        <div className='d-flex flex-column gap-3'>

          <img className='img-fluid' src={image} alt='' />
          {(() => {
            if (status === 'Dead') {
              return <div className='badge bg-danger fs-5'>{status}</div>;
            } else if (status === 'Alive') {
              return <div className=' badge bg-success fs-5'>{status}</div>;
            } else {
              return <div className='badge bg-secondary fs-5'>{status}</div>;
            }
          })()}
          <div className='content'>
            <h1 className='text-center'>{name}</h1>
            <div>
              <span className='fw-bold'>Species: </span>
              {species}
            </div>
            <div>
              <span className='fw-bold'>Gender : </span>
              {gender}
            </div>
            <div>
              <span className='fw-bold'>Location: </span>
              {location?.name}
            </div>
            <div>
              <span className='fw-bold'>Origin: </span>
              {origin?.name}
            </div>
            <div>
              <span className='fw-bold'>Episodes: </span>
              {episode?.map(episodeLink => (
                <div key={episodeLink}>
                  <a href={episodeLink} className='text-success'>{episodeLink}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Character;