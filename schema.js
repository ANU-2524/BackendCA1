const mongoose = require("mongoose") ;
const schema = new mongoose.Schema({
    Email : {
        type : String ,
        required : true 
    } , 
    Password : {
        type : Number , 
        required : true 
    }
})

const model = mongoose.model("userSchema" , schema) ;
module.exports = model ; 