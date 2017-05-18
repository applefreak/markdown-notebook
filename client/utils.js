const utils = {
  getLocalUUID: () => {
    const storeString = window.localStorage.getItem('notes')
    const notes = storeString ? JSON.parse(storeString) : {}
    return { notes }
  },
  addNewNote: (newNote) => {
    const storeString = window.localStorage.getItem('notes')
    if (storeString) {
      const currentNotes = JSON.parse(storeString)
      const newNotes = Object.assign(currentNotes, newNote)
      window.localStorage.setItem('notes', JSON.stringify(newNotes))
    } else {
      window.localStorage.setItem('notes', JSON.stringify(newNote))
    }
  },
  removeNote: (uuid) => {
    const storeString = window.localStorage.getItem('notes')
    if (storeString) {
      const currentNotes = JSON.parse(storeString)
      if (!currentNotes[uuid]) throw new Error('Key not found!')
      delete currentNotes[uuid]
      window.localStorage.setItem('notes', JSON.stringify(currentNotes))
      return true
    } else {
      throw new Error('No existing storage found!')
    }
  }
}

export default utils
