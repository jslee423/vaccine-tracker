const mongoose = require('mongoose')
const schemaObj = mongoose.Schema

mongoose.connect('mongodb://127.0.0.1/vaccine-tracker')

let userSchema = new schemaObj(
    {
        firstName: {type: String, require: true},
        lastName: {type: String, require: true},
        email: {type: String, require: true, unique: true},
        password: {type: String, require: true},
        DOB: {type: Date, require: true},
        Gender: {type: String, require: true},
        userType: {type: String, require: true},
        adminCode: {type: String},
        approved: {type: Boolean}
    }
)

let userModel = mongoose.model("user", userSchema)

module.exports = userModel