const express = require('express')
const router = express.Router()

//require bcrypt for password authentication
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

// express validator
const { body, validationResult } = require('express-validator');
const userModel = require('../models/user.model')


router.get('/register', (req, res) => {
    res.render('register')
})


router.post('/register',
    body('email').trim().isEmail(),
    body('password').trim().isLength({ min: 5 }),
    body('username').trim().isLength({ min: 3 }),
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'invalid data'
            })
        }
        const { email, username, password } = req.body;

        // const hashPassword = await bcrypt.hash(password, 10)
        const newUser = await userModel.create({
            username,
            email,
            password,
            // password: hashPassword
        })
        res.json(newUser)
    })


router.get('/login', (req, res) => {
    res.render('login')
})


router.post('/login',
    // body('email').trim().isEmail(),
    body('password').trim().isLength({ min: 5 }),
    body('username').trim().isLength({ min: 3 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'invalid data'
            })
        }

        const { username, password } = req.body;
        console.log('password from user',password)
        const user = await userModel.findOne({
            username: username
        })
        
        console.log(user.password)


        if (!user) {
            return rse.status(400).json({
                message: 'username or password is incorrect'
            })
        } 

        if (username==user.username && user.password == password) {
            console.log('yea success');
            console.log(user.password , user.username)
        }


        // const isMath = await bcrypt.compare(password, user.password);
        
        
        // console.log(isMath)

        // if (!isMath) {
        //     return res.status(400).json({
        //         message: 'username or password is incorrect'
        //     })
        // }

        //json web token

        const token = jwt.sign(
            {
                userId: user._id,
                email: user.email,
                username: user.username
            },
            process.env.JWT_SECRET_CODE

        )

        res.cookie('token', token)
        res.send('loge in success')


    })










module.exports = router