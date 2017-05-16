const router = require('express').Router()
const indexController = require('../controllers/indexController')

router.get('/', indexController.getHome)
router.get('/new', indexController.newNote)
router.get('/:uuid', indexController.viewNote)
router.get('/:uuid/edit', indexController.editNote)

module.exports = router
