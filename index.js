require('dotenv').config()
console.log(process.env)
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('*', (req, res) => {
    res.send('<h1>404 Page</h1>')
})

console.log(process.env.PORT)
app.listen(process.env.PORT)
