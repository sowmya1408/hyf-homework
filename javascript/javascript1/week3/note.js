const notes = [];

function addNote(content, id) {
    if (typeof (content === "string" && typeof (id === "number"))) {
        notes.push({
            content,
            id
        });
    } else {
        "Enter content as text & id as number"
    }
}
addNote('MyNote on Arrays', 1);
addNote('Notes on Functions', 2);
addNote('Notes on objects', 3);
console.log(notes);
//Get a note
function getNoteFromId(id) {
    for (let i = 0; i < notes.length; i++) {
        if (!typeof (id) === "number" && id === "") {
            return 'Enter an id number';
        } else if (notes[i].id === id) {
            return notes[i];
        }
    }
}

console.log(getNoteFromId(3));

// Get all notes
function getAllNotes() {
    const allNotes = [];
    for (let i = 0; i < notes.length; i++) {
        allNotes.push(notes[i].content);
    }
    return allNotes;
}
console.log(getAllNotes());


// log out notes
function logOutNotesFormatted() {
    const logoutAllNotes = [];
    for (let i = 0; i < notes.length; i++) {
        logoutAllNotes.push(`The note with id:${notes[i].id}, has the following note text:"${notes[i].content}".`)
    }
    return logoutAllNotes;
}
console.log(logOutNotesFormatted());