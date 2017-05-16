const router = require('express').Router()
const notesController = require('../controllers/notesController')

router.get('/:uuid', notesController.readNote)
router.post('/', notesController.createNote)
router.put('/:uuid/edit', notesController.updateNote)
router.delete('/:uuid', notesController.deleteNote)

module.exports = router
