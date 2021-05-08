const mongoose = require('mongoose')

const shoppingItemSchema = mongoose.Schema({ //här bestämmer vi hur produkten ska se ut

    title: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    created: {type: Date, default: Date.now},
    modified:{type: Date, default: Date.now}

})

module.exports = mongoose.model('homeItem', shoppingItemSchema) //ger namnet till mina collections, beskriver hur objektet ska se ut