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

const deletePost = async (id) => {
    const post = await Post.findByIdAndDelete(id)
    if (!post){
        const error = new Error ("Post not found")
        error["status"] = 404
        throw error
    } 

    return post
}

const updatePost = async (id,data) =>{
    const post = await Post.findByIdAndUpdate(id, data, {returnDocument: "after"})
    return post
}
module.exports= {getAll,getById, createPost, deletePost, updatePost}
