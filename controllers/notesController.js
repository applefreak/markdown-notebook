const Note = require('../models/note')

module.exports = {
  createNote: (req, res) => {
    console.log('createNote, req.body: ', req.body)
    Note.create(req.body)
    .then(note => res.json(note))
    .catch(err => res.json(err))
  },

  readNote: (req, res) => {
    console.log('readNote, req.params.uuid: ', req.params.uuid)
    Note.findOne({uuid: req.params.uuid})
    .then((note) => {
      if (!note) return Promise.reject(new Error('Record not found!'))
      const {md_content, created_at, last_modified, uuid} = note
      res.json({md_content, created_at, last_modified, uuid})
    })
    .catch(err => res.json({hasError: true, message: err.message}))
  },

  updateNote: (req, res) => {
    const { edit_key, md_content } = req.body
    const { uuid } = req.params
    const now = Date.now()
    console.log('updateNote, req.params.uuid: ', uuid)
    Note.findOne({ uuid })
    .then(note => {
      if (!note || edit_key !== note.edit_key) {
        return Promise.reject(new Error('Record not found or edit_key wrong!'))
      }

      const newNote = Object.assign(note, {
        md_content: md_content,
        last_modified: now
      })
      return Note.findOneAndUpdate({ uuid }, newNote)
    }).then(note => {
      res.json({hasError: false, last_modified: (new Date(now)).toISOString()})
    }).catch(err => {
      res.json({hasError: true, message: err.message})
    })
  },

  deleteNote: (req, res) => {
    const { edit_key } = req.body
    const { uuid } = req.params

    console.log('deleteNote, req.params.uuid: ', uuid)
    Note.findOne({ uuid })
    .then(note => {
      if (!note || edit_key !== note.edit_key) {
        return Promise.reject(new Error('Record not found or edit_key wrong!'))
      }

      return Note.findOneAndRemove({ uuid })
    }).then(note => {
      res.json({hasError: false})
    }).catch(err => {
      res.json({hasError: true, message: err.message})
    })
  }
}
