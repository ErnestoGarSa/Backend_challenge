const express = require("express")
const {login, newUser} = require ("../usecases/user.usecase")
const auth = require("../middlewares/auth.middleware")

const router = express.Router()

router.use(auth)

