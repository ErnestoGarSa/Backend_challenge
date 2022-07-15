const express = require("express")
const cors = require("cors")
const routerPost = require("./route/post.route") 
const routerUser =require("./route/user.route")
const routerAuth= require("./route/auth.route")
const app = express()

app.use(cors())

app.use(express.json())

app.use("/users", routerUser)

app.use("/post", routerPost)

app.use("/login", routerAuth)

app.get("/", (request, response) => {
    response.json({
        message:"Home Endpoint"
    })
})

module.exports= app