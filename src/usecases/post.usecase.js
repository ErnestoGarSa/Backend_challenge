const Post = require ("../models/post.model")
const mongoose = require("mongoose")

const getAll = () =>{
    const post = Post.find({})
    return post
}

const getById = (id) =>{
    const post = Post.findById(id)
    return post
}


module.exports= {getAll,getById}
