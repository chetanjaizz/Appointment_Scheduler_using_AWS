import React from 'react'
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const {note, updateNote} = props;
  return (
    <div className='col-md-3'>
        <div className="card my-3">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <h5 className="card-title">{note.title}</h5>
                    <i className="fa-solid fa-trash mx-2" onClick={() => {deleteNote(note._id); props.showAlert("Deleted Successfully", "success");}}></i>
                    <i className="fa-solid fa-envelope mx-2" onClick={()=>{updateNote(note); }}></i>
                    {/* <a href = "http://localhost:5173/"> */}
                        {/* <button className = "btn btn-secondary">schedule</button> */}
                    {/* </a> */}
                </div>
                
                <p className="card-text">{note.description}</p>
            </div>
        </div>
    </div>
  )
}

export default NoteItem
