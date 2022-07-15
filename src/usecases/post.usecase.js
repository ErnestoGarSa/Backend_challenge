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

const createPost = async (postData) =>{
    const post = await Post.create(postData)
    return post
}

module.exports= {getAll,getById, createPost}
