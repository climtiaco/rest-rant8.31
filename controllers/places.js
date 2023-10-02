const router = require('express').Router()
const places = require('../models/places')

//INDEX
// Res.render(view, [locals], [callback])... so this one specifically sets the route up for the places/index route which the 'views' engine is set up to show. And {places} would be the locals that it's pulling from the api.
router.get('/', (req, res) => {     
    res.render('places/index', { places })
})

//POST
// Req.body is in relation to the form that we're submitting. And its a bunch of if statements that have the "!" to signify a falsy boolean. So it's saying if it's not there, than place the pic I'm asking it to do.
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
    res.redirect('/places')
})

//NEW
//res.redirect([status,] path)
// The whole form is on new.jsx and we're literally just creating the route for it here. 
router.get('/new', (req, res) => {
  res.render('places/new')
})

//EDIT
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } 
  else if(!places[id]){
    res.render('error404')
  }
  else {
  res.render('places/edit', { place: places[id], id })}
})

///:idSHOW
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })
    
  }
})

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
  
})



module.exports = router