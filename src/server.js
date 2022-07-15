const express = require("express")
const app = express()
const routerPost = require("./route/post.route") 

app.use(express.json())

app.use("/post", routerPost)

app.get("/", (request, response) => {
    response.json({
        message:"Home Endpoint"
    })
})

module.exports= app