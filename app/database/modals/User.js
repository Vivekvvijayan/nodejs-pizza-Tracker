const mongoose = require('mongoose')

const userShema = mongoose.Schema({
    username:String,
    email:{type:String,required:true},
    password:{type:String,required:true}
},{timestamps:true})

module.exports = mongoose.model('User',userShema)