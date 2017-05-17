const utils = {
  getLocalUUID: () => {
    console.log('getLocalUUID')
    let notes = JSON.parse(window.localStorage.getItem('notes'))
    // const notes = { notes }
    if (!notes) notes = {}
    console.log('getLocalUUID', notes)
    return {notes}
  },
  addNewNote: (newNote) => {
    console.log('addNewNote', newNote)
    const storeString = window.localStorage.getItem('notes')
    if (storeString) {
      console.log('storeString', storeString)
      const currentNotes = JSON.parse(storeString)
      const newNotes = Object.assign(currentNotes, newNote)
      window.localStorage.setItem('notes', JSON.stringify(newNotes))
    } else {
      // append new note
      console.log('addNewNote new')
      window.localStorage.setItem('notes', JSON.stringify(newNote))
    }
  }
}

export default utils
