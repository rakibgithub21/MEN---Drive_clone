const express = require('express')
const router = express.Router()

//require bcrypt for password authentication
const bcrypt = require('bcrypt')

// express validator
const { body, validationResult } = require('express-validator');
const userModel = require('../models/user.model')


router.get('/register', (req, res) => {
    res.render('register')
})


router.post('/register',
    body('email').trim().isEmail(),
    body('password').trim().isLength({ min: 5 }),
    body('username').trim().isLength({min:3}),
    async(req, res) => {
    const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors,
                message:'invalid data'
          })
        }
        const { email, username, password } = req.body;

        const hashPassword = await bcrypt.hash(password, 10)
        const newUser =await  userModel.create({
            username,
            email,
            password: hashPassword
        })
        res.json(newUser)
})










module.exports = router