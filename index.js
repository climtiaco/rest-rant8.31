require('dotenv').config()
console.log(process.env)
const express = require('express')
const app = express()


//Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))


//This is where the react router is connected to the separate js file.
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})


app.listen(process.env.PORT)
 
// Inside the gitignore is node_modules / .env / .DS_Store... the env file just has the port number which you could change accordingly.