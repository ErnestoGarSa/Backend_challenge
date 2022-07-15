const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    photo:{
        type: String
    },
    userName:{
        type: String,
        required:true,
        minlength:3,
        maxlength:15
    },
    profilePic:{
        type: String
    },
    title:{
        type: String,
        required:true,
    },
    hashTag:{
        type: String,
        minlength:2,
        maxlength:10
    },
    post:{
        type: String,
        required:true,
        minlength:3,
    },
    readTime:{
        type: String,
        required:true,
    },
    date:{
        type: String,
        required:true,
    } 
})

module.exports=mongoose.model("posts", postSchema)