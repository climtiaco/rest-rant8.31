const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            <form method="POST" action="/places">
                <div className="form-group">
                    {/*The important parts of this form are the htmlFor, id and name because these are how we find these variables in the back-end*/}
                    <label htmlFor="name">Place Name</label>
                        <input id="name" className="form-control" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="pic">Place Picture</label>
                        <input type="url" id="pic" className="form-control" name="pic" />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                        <input id="city" className="form-control" name="city"/>

                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                        <input id="state" className="form-control" name="state"/>
                </div>
                <div className="form-group">
                    <label htmlFor="cuisines">Cuisines</label>
                        <input id="cuisines" className="form-control" name="cuisines" required/>
                </div>
                    <input className='btn btn-primary' type="submit" value="Add Place"/>
            </form>


          </main>
        </Def>
    )
}

module.exports = new_form
