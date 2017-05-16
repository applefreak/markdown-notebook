module.exports = {
  getHome: (req, res) => {
    res.send('getHome')
  },
  newNote: (req, res) => {
    res.send('newNote')
  },
  viewNote: (req, res) => {
    res.send('viewNote')
  },
  editNote: (req, res) => {
    res.send('editNote')
  }
}
