function getNoteId() {
    let noteObject = getExistingNotes()
    if(!noteObject){
        return 1
}
    const keysArray = Object.keys(noteObject)
    const numbersKeys = keysArray.map((key)=>Number(key))
    console.log(numbersKeys) 
    return Math.max(...numbersKeys) + 1
}

function getExistingNotes() {
    let notes = localStorage.getItem('notes')
    if(!notes){
        return null
    }
    return JSON.parse(notes)
}