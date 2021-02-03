import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./card";
import AddIcon from "./icons/addIcon";
import { getNotes, createNote, deleteNotes } from "../utility/notesUtility";
import DeleteAllIcon from "./icons/deleteAll";

const baseNotes = [
  {
    id: 1,
    title: "Take Medicines",
    type: "reminder",
    body: "Take morning medicines",
  },
  {
    id: 2,
    title: "Ethereum",
    type: "task",
    body: "Study for 30 minutes",
  },
  {
    id: 3,
    title: "Mom's Medicines",
    type: "reminder",
    body: "Remind mom to take medicines",
  },
  {
    id: 4,
    title: "Dad's Meds",
    type: "reminder",
    body: "Remind dad to take meds",
  },
  {
    id: 5,
    title: "Algo",
    type: "task",
    body: "Solve one problem in Hackerrank",
  },
  {
    id: 6,
    title: "React Storybook",
    type: "task",
    body: "Study React Storybook",
  },
];

Notes.propTypes = {};

function Notes(props) {
  //const [note, setNote] = useState({});
  const [notes, setNotes] = useState([]);

  const deleteAllNotes = () => {
    deleteNotes()
      .then((res) => setNotes([]))
      .catch((err) => console.log(err));

    //setNotes([...notes, note])
    console.log("use effect #");
    console.log(notes);
  };

  const addNote = () => {
    const note = {
      id: Math.random() * 10000000,
      title: "New Note",
      body: "New note added",
      type: "task",
    };
    createNote(note)
      .then((res) => setNotes([...notes, res]))
      .catch((err) => console.log(err));

    //setNotes([...notes, note])
    console.log("use effect 1");
    console.log(notes);
  };

  useEffect(() => {
    getNotes()
      .then((res) => {
        setNotes([...res]);
      })
      .catch((error) => console.log(error));
    console.log("use effect 2");
    //console.log(notes);
  }, []);

  return (
    <div className="flex flex-col items-start justify-around">
      <div className="sticky bottom-1 self-end inline-grid grid-cols-3 gap-x-4">
        <span className="cursor-pointer" onClick={addNote}>
          <AddIcon />
        </span>
        <span className="cursor-pointer" onClick={deleteAllNotes}>
          <DeleteAllIcon />
        </span>
      </div>
      <div className="h-1 flex flex-wrap flex-row">
        {notes &&
          notes.map((note) => {
            return <Card key={note.note.id} {...note.note} />;
          })}
      </div>
    </div>
  );
}

export default Notes;
