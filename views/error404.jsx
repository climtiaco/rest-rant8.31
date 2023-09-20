const React = require('react')
const Def = require('./default')

function error404(){
    return (
        <Def>
            <main>
                <h1>404: Page not Found</h1>
                <p className="rickroll">Oops, sorry, we can't find this page!</p>
                <iframe className="rickroll" src="https://giphy.com/embed/Ju7l5y9osyymQ" width="480" height="360" class="giphy-embed" allowFullScreen></iframe><p><a className="rickroll" href="https://giphy.com/gifs/rick-astley-Ju7l5y9osyymQ">via GIPHY</a></p>
            </main>
        </Def>
    )
}

module.exports = error404