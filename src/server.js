const express = require("express")
const app = express()
const routerPost = require("./route/post.route") 
const routerUser =require("./route/user.route")
const routerAuth= require("./route/auth.route")

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