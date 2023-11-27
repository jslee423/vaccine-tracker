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
            if (existingUser.approved) {
                console.log("login successful")
                res.status(200).send(existingUser)
            } else {
                res.status(400).send("Account not yet approved")
            }
        } else {
            console.log("incorrect password")
            res.status(400).send('Incorrect password')
        }
    })
    .catch((error) => {
        console.log("login user not found, error: ", error)
        res.status(404).send('User not found')
    })
})

route.post('/getusers', (req, res) => {
    userDataModel.find({approved: false})
    .then((foundUsers) => {
        console.log("unapproved users found: ", foundUsers)
        res.status(200).send(foundUsers)
    })
    .catch((error) => {
        console.log("no users found", error)
        res.status(400).send("No users found")
    })
})

module.exports = route