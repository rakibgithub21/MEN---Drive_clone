const express = require('express')
const cookieParser = require('cookie-parser')
const app = express();
const dotenv = require('dotenv');
dotenv.config()

const connectToDb = require('./config/db')
connectToDb()

const userRouter = require('./routes/user.routes');
const indexRouter = require('./routes/index.routes')

//for ejs setup
app.set('view engine', 'ejs') // then create views folder in root
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/user/v1', userRouter)
app.use('/',indexRouter)


app.listen(3000, () => {
    console.log(` server is running on 3000 `);
})