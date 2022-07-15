const createError = require("http-errors")
const bcrypt = require("bcrypt")
const User = require ("../models/user.model")
const jwt = require("../lib/jwt.lib")

const login = async (email, password) =>{
    const user = await User.findOne({email})

    if(!user) throw createError(400, "Invalid data")

    const isValid = await bcrypt.compare(password, user.password)
    
    if(!isValid) throw createError(400, "Invalid data")

    const token = jwt.sign({id: user._id})
    console.log("token", token)
    return token
}

const newUser = async (data) =>{
    console.log(data)
    const hash = await bcrypt.hash(data.password, 10)

    data.password = hash

    return await User.create(data)
}

module.exports = {login, newUser}