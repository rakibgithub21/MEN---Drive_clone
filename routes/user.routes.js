const express = require('express')
const router = express.Router()
// express validator
const { body, validationResult } = require('express-validator');


router.get('/register', (req, res) => {
    res.render('register')
})


router.post('/register',
    body('email').trim().isEmail(),
    body('password').trim().isLength({ min: 5 }),
    body('username').trim().isLength({min:3}),
    (req, res) => {
    const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors,
                message:'invalid data'
          })
        }
        res.send(req.body)
})










module.exports = router