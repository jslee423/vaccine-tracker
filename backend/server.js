const express = require('express')
const app = express()
const cors = require('cors')

const userRoute = require('./routes/userRoute')
const userApp = express()


console.log('in vaccine tracker server.js')

app.use(cors())

app.use(express.json({ limit: '2mb', extended: false }))

app.use('/user', userApp)
userApp.use('/', userRoute)

app.get('*', (req, res) => {
    res.status(404).send("API not found")
})

console.log("listening on port 9000")
app.listen(9000)