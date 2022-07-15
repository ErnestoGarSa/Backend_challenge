const express = require("express")
const {getAll, getById, createPost} = require ("../usecases/post.usecase")
const router = express.Router()

router.get ("/", async (request, response)=>{

    try{
        const posts = await getAll()
        response.json({
            success:true,
            data:{
                posts
            }
        })
    }catch(error){
        response.status(error.status || 500)
        response.json({
            success:false,
            message: error.message
        })
    }
})

router.get ("/:id", async (request, response)=>{
    const {id} = request.params
    try{
        const post = await getById(id)
        response.json({
            success:true,
            data:{
                post
            }
        })
    }catch(error){
        response.status(error.status || 404)
        response.json({
            success:false,
            message: error.message
        })
    }
})

router.post("/", async (request, response)=>{
    try{
        const post = await createPost(request.body)
        response.status(201)
        response.json({
            success: true, 
            data: {
                post
            }
        })
    }catch(error){
        response.status(error.status || 400)
        response.json({
            success : false,
            message: error.message
        })
    }
})

module.exports = router