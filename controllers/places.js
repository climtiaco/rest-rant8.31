const router = require('express').Router()

//INDEX
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai-food.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/cafe-food.jpg'
      }]
      
    res.render('places/index', { places })
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