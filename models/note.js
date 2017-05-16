const mongoose = require('mongoose')
const randStr = require('randomstring')
const Schema = mongoose.Schema

const _gen6id = () => randStr.generate(6)
const _gen10id = () => randStr.generate(10)

mongoose.Promise = global.Promise

const notesSchema = new Schema({
  md_content: {type: String, required: true},
  uuid: {type: String, default: _gen6id},
  created_at: {type: Date, default: Date.now},
  last_modifid: {type: Date, default: null},
  edit_key: {type: String, default: _gen10id}
})

module.exports = mongoose.model('Note', notesSchema)
