const Filter = () => {
  return(
    <div className="accordion" id="accordionExample">
      <div className="card-header" id="headingOne">
      
        <h5 className="mb-0">
        <p>
          <button className="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1" aria-expanded="false" aria-controls="collapseExample">
            Status
          </button>
        </p>

        <div className="collapse multi-collapse show" id="multiCollapseExample1">
          <div className="card-body">
            <span className="mx-1 mb-2 d-inline-block">
              <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Alive
              </button>
            </span>
            <span className="mx-1 mb-2 d-inline-block">
              <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Dead
              </button>
            </span>
            <span className="mx-1 mb-2 d-inline-block">
              <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Unknown
              </button>
            </span>
          </div>
        </div>
        </h5>
      </div>

      <div className="card-header" id="headingTwo">
        <h5 className="mb-0">
        <p>
          <button className="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="collapseExample">
            Gender
          </button>
        </p>

        <div className="collapse multi-collapse" id="multiCollapseExample2">
  
        </div>
        </h5>
      </div>

    </div>
  )
}

export default Filter;