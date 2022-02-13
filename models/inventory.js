const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    product: {
        type: String,
        require: true
    },
    category: {
        type: String,
        enum: ['shoes', 'jeans', 'shirts', 'boots'],
        require: true
    },
    price: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model("Items", inventorySchema)
