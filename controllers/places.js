const router = require('express').Router()
const places = require('../models/places')

//INDEX
router.get('/', (req, res) => {     
    res.render('places/index', { places })
})

//POST
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      req.body.pic = '/images/random.jpg'
    } 
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('POST /places')
})

//NEW
router.get('/new', (req, res) => {
  res.render('places/new')
})

//SHOW
router.get('/:id', (req, res) => {
  if (places[req.params.id]) {
    res.render('')
  }
})




module.exports = router