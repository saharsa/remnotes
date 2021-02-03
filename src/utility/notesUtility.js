import db from "../db/db";

const createNote = async (note) => {      
  const saved = await db.notes.insert({note});
  return saved;
}
const deleteNotes = async () => {      
  const saved = await db.notes.remove({}, { multi: true });
  return saved;
}
const getNotes = async () => {
  const notes = await db.notes.find({})
  console.log(notes)
  return notes;
}

export { createNote, deleteNotes, getNotes};