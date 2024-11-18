const express = require('express')

const router = express.Router()

// /user/v1/

router.get('/register', (req, res) => {
    res.render('register')
})


router.post('/register', (req, res) => {
    console.log(req.body)
    res.send('User Registerd')
})










module.exports = router