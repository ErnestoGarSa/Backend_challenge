const jwt = require("../lib/jwt.lib")

const auth = (request, response, next) => {
    // Verificar que el token que el frontend nos envie 
    const authorization = request.headers.authorization || ""
    // QUitando bearer
    const token = authorization.replace("Bearer ", "")
    
    const verifiedToken = jwt.verify(token)

    request["userID"] = verifiedToken.id
    next()
}

module.exports = auth
