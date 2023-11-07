const express = require('express')
const route = express.Router()
const userDataModel = require('../dataModels/userDataModel')

route.post('/signup', (req, res) => {
    const adminCodes = ["12345"];
    const user = req.body

    userDataModel.findOne({email: user.email})
    .then((existingUser) => {
        if (existingUser) {
            res.status(409).send("Email already exists")
        } else {
            if (user.userType === "admin" && !adminCodes.includes(user.adminCode)) {
                console.log("Provided admin code invalid")
                res.status(400).send("Admin code invalid")
            } else {
                const newUser = new userDataModel(user)
                newUser.save().then((newUser) => {
                    console.log("Signup successful")
                    res.send(newUser)
                })
                .catch((error) => {
                    console.log("signup error: ", error)
                    res.status(400).send("Error during signup")
                })
            }
        }
    })
    .catch((error) => {
        console.log("error accessing database: ", error)
        res.status(404).send("Error accessing database")
    })
})

route.post('/login', (req, res) => {
    const user = req.body

    userDataModel.findOne({email: user.email})
    .then((existingUser) => {
        if (existingUser.password === user.password) {
            res.status(200).send(existingUser)
        } else {
            res.status(200).send('Incorrect password')
        }
    })
    .catch((error) => {
        console.log("login user not found, error: ", error)
        res.status(404).send('User not found')
    })
})

module.exports = route