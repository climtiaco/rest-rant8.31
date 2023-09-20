const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <a href="/">
                <h1>REST-Rant</h1>
                </a>
                <div>
                    <img src="/images/foodpic.jpg" alt="Chia Fruit Shake"/>
                    <div className="photocred">
                        Photo by <a href="https://unsplash.com/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godinez</a> on <a href="https://unsplash.com/photos/MsTOg6rhRVk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                <button className="btn btn-primary">Places Page</button>
                </a>

            </main>
        </Def>
    )
}

module.exports = home