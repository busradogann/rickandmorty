import React, { useEffect, useReducer } from 'react';


const initialFilters = {
  name: undefined,
  status: undefined,
  species: undefined,
  type: undefined,
  gender: undefined
};

function filterReducer(state, action) {
  switch (action.type) {
    case 'name':
      return {...state, name: action.value}
    case 'status':
      const allowedStatuses = new Set(['alive', 'dead', 'unknown'])
      if (allowedStatuses.has(action.value)) {
        return {...state, status: action.value}
      } else {
        throw new Error('Undefined value for status filter');
      }
    case 'species':
      return {...state, species: action.value}
    case 'type':
      return {...state, type: action.value}
    case 'gender':
      const allowedGenders = new Set(['female', 'male', 'genderless', 'unknown'])
      if (allowedGenders.has(action.value)) {
        return {...state, gender: action.value}
      } else {
        throw new Error('Undefined value for gender filter');
      }
    default:
      throw new Error('Undefined filter');
  }
}

const Filter = ({setFilters}) => {
  const [filters, dispatch] = useReducer(filterReducer, initialFilters);

  useEffect(() => {
    setFilters(filters);
  }, [filters]);

  return(
    <div className='accordion' id='accordionExample'>
      <div className='card-header' id='headingOne'>
      
        <h5 className='mb-0'>
        <p>
          <button className='btn btn-dark' type='button' data-bs-toggle='collapse' data-bs-target='#multiCollapseExample1' aria-expanded='false' aria-controls='collapseExample'>
            Status
          </button>
        </p>

        <div className='collapse multi-collapse show' id='multiCollapseExample1'>
          <div className='card-body'>
            <span className='mx-1 mb-2 d-inline-block'>
              <button className='btn btn-success' onClick={() => dispatch({type: 'status', value: 'alive'})} type='button' data-bs-toggle='collapse' data-bs-target='#collapseExample' aria-expanded='false' aria-controls='collapseExample'>
                Alive
              </button>
            </span>
            <span className='mx-1 mb-2 d-inline-block'>
              <button className='btn btn-danger' onClick={() => dispatch({type: 'status', value: 'dead'})} type='button' data-bs-toggle='collapse' data-bs-target='#collapseExample' aria-expanded='false' aria-controls='collapseExample'>
                Dead
              </button>
            </span>
            <span className='mx-1 mb-2 d-inline-block'>
              <button className='btn btn-secondary' onClick={() => dispatch({type: 'status', value: 'unknown'})} type='button' data-bs-toggle='collapse' data-bs-target='#collapseExample' aria-expanded='false' aria-controls='collapseExample'>
                Unknown
              </button>
            </span>
          </div>
        </div>
        </h5>
      </div>

      <div className='card-header' id='headingTwo'>
        <h5 className='mb-0'>
        <p>
          <button className='btn btn-dark' type='button' data-bs-toggle='collapse' data-bs-target='#multiCollapseExample2' aria-expanded='false' aria-controls='collapseExample'>
            Gender
          </button>
        </p>

        <div className='collapse multi-collapse' id='multiCollapseExample2'>
          <div className='card-body'>
              <span className='mx-1 mb-2 d-inline-block'>
                <button className='btn btn-secondary' onClick={() => dispatch({type: 'gender', value: 'female'})} type='button' data-bs-toggle='collapse' data-bs-target='#collapseExample' aria-expanded='false' aria-controls='collapseExample'>
                  Female
                </button>
              </span>
              <span className='mx-1 mb-2 d-inline-block'>
                <button className='btn btn-secondary' onClick={() => dispatch({type: 'gender', value: 'male'})} type='button' data-bs-toggle='collapse' data-bs-target='#collapseExample' aria-expanded='false' aria-controls='collapseExample'>
                  Male
                </button>
              </span>
              <span className='mx-1 mb-2 d-inline-block'>
                <button className='btn btn-secondary' onClick={() => dispatch({type: 'gender', value: 'genderless'})} type='button' data-bs-toggle='collapse' data-bs-target='#collapseExample' aria-expanded='false' aria-controls='collapseExample'>
                  Genderless
                </button>
              </span>
              <span className='mx-1 mb-2 d-inline-block'>
                <button className='btn btn-secondary' onClick={() => dispatch({type: 'gender', value: 'unknown'})} type='button' data-bs-toggle='collapse' data-bs-target='#collapseExample' aria-expanded='false' aria-controls='collapseExample'>
                  Unknown
                </button>
              </span>
            </div>
        </div>
        </h5>
      </div>

      <div className='card-header' id='headingThree'>
        <h5 className='mb-0'>
        <p>
          <button className='btn btn-dark' type='button' data-bs-toggle='collapse' data-bs-target='#multiCollapseExample3' aria-expanded='false' aria-controls='collapseExample'>
            Species
          </button>
        </p>

        <div className='collapse multi-collapse' id='multiCollapseExample3'>
          <div className='card-body'>
              <span className='mx-1 mb-2 d-inline-block'>
                <button className='btn btn-secondary' onClick={() => dispatch({type: 'species', value: 'human'})} type='button' data-bs-toggle='collapse' data-bs-target='#collapseExample' aria-expanded='false' aria-controls='collapseExample'>
                  Human
                </button>
              </span>
              <span className='mx-1 mb-2 d-inline-block'>
                <button className='btn btn-secondary' onClick={() => dispatch({type: 'species', value: 'alien'})} type='button' data-bs-toggle='collapse' data-bs-target='#collapseExample' aria-expanded='false' aria-controls='collapseExample'>
                  Alien
                </button>
              </span>
              <span className='mx-1 mb-2 d-inline-block'>
                <button className='btn btn-secondary' onClick={() => dispatch({type: 'species', value: 'humanoid'})} type='button' data-bs-toggle='collapse' data-bs-target='#collapseExample' aria-expanded='false' aria-controls='collapseExample'>
                  Humanoid
                </button>
              </span>
              <span className='mx-1 mb-2 d-inline-block'>
                <button className='btn btn-secondary' onClick={() => dispatch({type: 'species', value: 'poopybutthole'})} type='button' data-bs-toggle='collapse' data-bs-target='#collapseExample' aria-expanded='false' aria-controls='collapseExample'>
                  Poopybutthole
                </button>
              </span>
              <span className='mx-1 mb-2 d-inline-block'>
                <button className='btn btn-secondary' onClick={() => dispatch({type: 'species', value: 'animal'})} type='button' data-bs-toggle='collapse' data-bs-target='#collapseExample' aria-expanded='false' aria-controls='collapseExample'>
                  Animal
                </button>
              </span>
              <span className='mx-1 mb-2 d-inline-block'>
                <button className='btn btn-secondary' onClick={() => dispatch({type: 'species', value: 'robot'})} type='button' data-bs-toggle='collapse' data-bs-target='#collapseExample' aria-expanded='false' aria-controls='collapseExample'>
                  Robot
                </button>
              </span>
              <span className='mx-1 mb-2 d-inline-block'>
                <button className='btn btn-secondary' onClick={() => dispatch({type: 'species', value: 'cronenberg'})} type='button' data-bs-toggle='collapse' data-bs-target='#collapseExample' aria-expanded='false' aria-controls='collapseExample'>
                  Cronenberg
                </button>
              </span>
              <span className='mx-1 mb-2 d-inline-block'>
                <button className='btn btn-secondary' onClick={() => dispatch({type: 'species', value: 'Disease'})} type='button' data-bs-toggle='collapse' data-bs-target='#collapseExample' aria-expanded='false' aria-controls='collapseExample'>
                  Disease
                </button>
              </span>
            </div>
        </div>
        </h5>
      </div>

    </div>
  )
}

export default Filter;