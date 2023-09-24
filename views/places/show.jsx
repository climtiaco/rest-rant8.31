const React = require('react')
const Def = require('../default')

function show (data, edit) {
    return (
        <Def>
          <main>
            <div className="card text-center">
              <div className="card-header" >
                <h1>{ data.place.name }</h1>
                </div>
                    <div className="card-body" >
                      <img src={data.place.pic} alt={data.place.name} />
                      <p> Located in {data.place.city}, {data.place.state} </p>
                      <p>{data.place.cuisines}</p>
                      <h2>Rating</h2>
                      <p>Not Rated</p>
                      <h2>Comments</h2>
                      <p>No Comments Yet!</p>
                  <div className='card-footer text-body secondary footer-buttons' >
                    <a href="/" className='btn btn-primary'>
                      Back to Places Page 
                    </a>
                    <a href={`/places/${data.id/edit}`} className='btn btn-warning' >Edit</a>
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`} >
                      <button type="submit" className='btn btn-danger'>
                        Delete
                      </button>
                    </form>

                  </div>
                </div>
            </div>
          </main>
        </Def>
    )
}

module.exports = show
