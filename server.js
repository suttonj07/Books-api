// DEPENDENCIES
const express = require('express')


// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()


// MIDDLEWARE
app.use(express.json())

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome Books! API')
  })


// Books: 
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)


// LISTEN
app.listen(PORT, () => {
    console.log('Greetings! From port: ', PORT);
  })

// const express = require('express')

// // CONFIGURATION
// require('dotenv').config()
// const PORT = process.env.PORT
// const app = express()

// // MIDDLEWARE
// app.use(express.static('public'))
// app.use(express.urlencoded({ extended: true }))

// // Controllers
// app.use('/books', require('./controllers/books_controller.js'))

// app.get('/', (req, res) => {
//     res.send('<h1>Hello from Books API!!</h1>')
// })

// // Listen for Connections
// app.listen(PORT, () => console.log("App is running!"))