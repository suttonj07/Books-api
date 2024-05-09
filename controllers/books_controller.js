const express = require('express')
const books = express.Router()
const Books = require('../models/books.js')
const seedData = require('../books/seed.js')

books.get('/seed', (req, res) => {
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
books.get('/:id', (req, res) => {
    Books.findOne({ name: req.params.books .toLowerCase() })
        .then(foundBooks => {
            res.json(foundBooks)
        })
        .catch(err => {
            console.log(err) 
            res.json('error404')
          })
})

// Add /books
books.post('/:id/books', (req, res) => {
    console.log(req.body)
    db.Books.findById(req.params.id)
    .then(books => {
        console.log(books)
        db.Books.create(req.body)
        .then(books => {
            console.log("New book:")
            console.log(books)
            books.push(books.id)
            books.save()
            .then(() => {
                res.redirect(`/books/${req.params.id}`)
            })
            .catch(err => {
                console.log(err) 
                res.json('error404')
              })
            })
    })
})
// Update /books/:id
books.put('/:id', (req, res) => {
    db.Books.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect(`/books/${req.params.id}`)
    })
        .catch(err => {
            console.log(err) 
            res.json('error404')
          })
    })

// Delete /books/:id
books.delete('/:id', (req, res) => {
    Books.findByIdAndDelete(req.params.id) 
      .then(deletedBooks => { 
        res.status(303).redirect('/books')
      })
      .catch(err => {
        console.log(err) 
        res.json('error404')
      })
})

module.exports = books


     