const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const config = require('./config')
const indexRouter = require('./routes/index')
const notesRouter = require('./routes/notes')

app.use(bodyParser.json())

app.use('/', indexRouter)
app.use('/api', notesRouter)

app.use((req, res) => {
  console.log('404 HIT')
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
