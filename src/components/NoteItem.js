import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    return (
        <div className='col-md-3'>
            <div className="card my-3 shadow-sm">
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                        <h5 className="card-title">{note.title}</h5>
                        <div>
                            <i 
                                className="fa-solid fa-trash mx-2 text-danger" 
                                onClick={() => {
                                    deleteNote(note._id);
                                    props.showAlert("Deleted Successfully", "success");
                                }}
                                style={{ cursor: 'pointer' }}
                            ></i>
                            <i 
                                className="fa-solid fa-envelope mx-2 text-primary" 
                                onClick={() => updateNote(note)} 
                                style={{ cursor: 'pointer' }}
                            ></i>
                        </div>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
                <div className="card-footer text-muted">
                    <small>
                        Created on: {new Date().toLocaleDateString()}
                    </small>
                </div>
            </div>
        </div>
    );
};

export default NoteItem;
