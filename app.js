const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const config = require('./config')
// const indexRouter = require('./routes/index')
const notesRouter = require('./routes/notes')

const app = express()
app.disable('etag')
app.use(bodyParser.json())

// app.use('/', indexRouter)
app.use('/api', notesRouter)
app.use(express.static(path.join(__dirname, 'public')))
// app.use('/:thing/', express.static(path.join(__dirname, 'public')))
// app.use('/edit/:thing', express.static(path.join(__dirname, 'public')))
// app.use('/new', express.static(path.join(__dirname, 'public')))

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.use((req, res) => {
  console.log('404 HIT', req.url)
  res.status(404).send('Not Found')
})

mongoose.connect(config.dbUri)
mongoose.connection.once('open', () => {
  console.log('Connected to Database')
})

app.listen(3000, () => {
  console.log('App Up!')
})

module.exports = app
