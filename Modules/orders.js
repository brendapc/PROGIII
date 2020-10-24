const mongoose = require('mongoose')

const ordersSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectID,
    quantity: Number,
    name: String
})

module.exports = mongoose.model('Orders', ordersSchema)