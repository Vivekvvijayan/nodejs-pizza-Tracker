const mongoose = require('mongoose')

module.exports =  connection = () => {

    mongoose.connect('mongodb://localhost:27017/pizza',{ useNewUrlParser: true })
    .then(() => {
        console.log('conncted to database');
    }).catch(err => console.log(err))

}