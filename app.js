const app = require('express')()
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')
const notesRouter = require('./routes/notes')

app.use(bodyParser.json())

app.use('/', indexRouter)
app.use('/api', notesRouter)

app.use((req, res) => {
  console.log('404 HIT')
  res.status(404).send('Not Found')
})

app.listen(3000)

module.exports = app
