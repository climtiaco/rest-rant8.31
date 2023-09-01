require('dotenv').config()
console.log(process.env)
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.send('<h1>404 Page</h1>')
})

console.log(process.env.PORT)
app.listen(process.env.PORT)
