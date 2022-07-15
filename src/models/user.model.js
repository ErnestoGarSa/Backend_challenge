const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3
    },
    email: {
        type: String, 
        match: /^.*@.*\..*$/,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true,
        minlength: 3
      }
})

module.exports=mongoose.model("user", userSchema)
