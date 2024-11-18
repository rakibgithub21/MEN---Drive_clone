const mongoose = require('mongoose')

function connectToDb() {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log('db connection');
    })
}


module.exports = connectToDb