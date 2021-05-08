const mongoose = require ('mongoose')
const userSchema = mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    emailadress: {type: String, required: true, unique:true},
    passwordHash: {type: String, required: true},

    created: {type: Date, default: Date.now},
    modified: {type: Date, default: Date.now}
})

module.exports = mongoose.model('user', userSchema)