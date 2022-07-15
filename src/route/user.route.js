const express = require("express")
const {newUser} = require ("../usecases/user.usecase")
const { getById } = require("../usecases/post.usecase")

const router = express.Router()

router.get("/detail", async(request, response)=>{
    try{
        const user = await getById(request.userID)
        response.json({
            success: true,
            data: {
                user
            }
        })
    }catch(error){
        response.status(error.status || 500)
        response.json({
            success: false,
            message: error.message
        })
    }
})

router.post("/", async(request, response)=>{
    try{
        console.log("ya entro")
        const user = await newUser(request.body)
        response.status(201)
        response.json({
            success: true,
            data:{
                user
            }
        })
    }catch(error){
        console.log(error)
        response.status(error.status || 500)
        response.json({
            success: false,
            message: error.message
            
        })
    }
})

module.exports = router