const React = require('react')
const Def = require('../default')

function edit_form(data) {
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            <form method="POST" action={`/places/$data.place.id}?_method=PUT`}>
                <div className="row">
                    <div className="form-group col-sm-6">
                    {/*The important parts of this form are the htmlFor, id and name because these are how we find these variables in the back-end*/}
                    <label htmlFor="name">Place Name</label>
                        <input 
                            id="name"
                            className="form-control" 
                            name="name"
                            value={data.place.name} 
                            required
                            />
                    </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="pic">Place Picture</label>
                        <input 
                            type="url" 
                            id="pic" 
                            className="form-control" 
                            name="pic"
                            value={data.place.pic}
                        />
                    </div>
                </div>
                <div className="row">
                <div className="form-group col-sm-6">
                    <label htmlFor="city">City</label>
                        <input 
                            id="city" 
                            className="form-control" 
                            name="city"
                            value={data.place.city}
                        />

                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="state">State</label>
                        <input 
                            id="state" 
                            className="form-control" 
                            name="state"
                            value={data.place.state}
                        />
                </div>
            </div>
                <div className="form-group">
                    <label htmlFor="cuisines">Cuisines</label>
                        <input 
                            id="cuisines" 
                            className="form-control" 
                            name="cuisines" 
                            value={data.place.cuisines}
                            required
                        />
                </div>
                    <input 
                        className='btn btn-primary' 
                        type="submit" 
                        value="Update Place"
                    />
            </form>


          </main>
        </Def>
    )
}

module.exports = edit_form