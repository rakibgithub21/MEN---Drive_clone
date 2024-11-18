const express = require('express')

const app = express();

const userRouter = require('./routes/user.routes');

//for ejs setup
app.set('view engine','ejs') // then create views folder in root
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/user/v1',userRouter)


app.listen(3000, () => {
    console.log(` server is running on 3000 `);
})