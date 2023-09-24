require('dotenv').config()
console.log(process.env)
const express = require('express')
const app = express()
const methodOverride = require('method-override')


//Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
//App.use(express.urlencoded({extended:true})) Is mainly fr Decrypting the information sent through the POST data that we send. The POST data we send is already encrypted.
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))


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