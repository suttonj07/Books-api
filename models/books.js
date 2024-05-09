// require mongoose: 
const mongoose = require('mongoose')
const { Schema } = mongoose 

// schema:
const booksSchema = newSchema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String,
})

const Books = mongoose.model('Books', booksSchema)
module.exports = Books