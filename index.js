const server = require("./src/server")

server.listen(8080, (request, response) => {
    console.log("Nuestro servidor esta activo")
})