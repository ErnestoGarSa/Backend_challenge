const jwt = require("jsonwebtoken")
const {JWT_SECRET} = process.env

const sign = (payload= {}) =>{
    return jwt.sign(payload, {expiresIn: "5h"})
}

const verify =(token) =>{
    return jwt.verify(token, JWT_SECRET)
}

module.exports = {sign, verify}