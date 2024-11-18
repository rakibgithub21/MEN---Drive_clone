const express = require('express')

const app = express();

//for ejs setup
app.set('view engine','ejs') // then create views folder in root



app.get('/', (req,res) => {
    res.render('index')
})


app.listen(3000, () => {
    console.log(` server is running on 3000 `);
})