const express = require('express')
const books = express.Router()
const Books = require('../models/books.js')
const seedData = require('../language/seed.js')

languages.get('/seed', (req, res) => {
    Books.insertMany(seedData)
        .then(books => {
            res.json({
                message: "Seed successful!"
            })
        })
})

// Index:
books.get('/', (req, res) => {
    Books.find()
        .then(foundBooks => {
            res.json(foundBooks)
        })
        .catch(err => {
            console.log(err) 
            res.json('error404')
          })
})

// Show:
languages.get('/:id', (req, res) => {
    Books.findOne({ name: req.params.books .toLowerCase() })
        .then(foundBooks => {
            res.json(foundBooks)
        })
        .catch(err => {
            console.log(err) 
            res.json('error404')
          })
})


// Update /books/:id
// Add /books
// Delete /books/:id

module.exports = books