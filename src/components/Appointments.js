import { useContext, useRef, useState } from 'react';
import NotesContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';

const Appointments = ({ showAlert }) => {
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "default" });
    const ref = useRef(null);
    const { notes } = useContext(NotesContext);

    const updateNote = (currentNote) => {
        ref.current.click(); // Trigger the hidden button to open the modal
        setNote({ 
            id: currentNote._id, 
            etitle: currentNote.title, 
            edescription: currentNote.description, 
            etag: currentNote.tag 
        });
    };

    return (
        <div className="container my-3">
            <h2>Appointments</h2>
            <div className="container mx-2">
                {notes.length === 0 ? 'No appointments to display' : null}
            </div>
            <div className="row">
                {notes.map((note) => (
                    <NoteItem 
                        key={note._id} 
                        showAlert={showAlert} 
                        updateNote={updateNote} 
                        note={note} 
                    />
                ))}
            </div>

            {/* Hidden button to open modal */}
            <button 
                ref={ref} 
                style={{ display: 'none' }} 
                data-toggle="modal" 
                data-target="#exampleModal" 
            ></button>

            {/* Modal for editing notes */}
            <div className="modal" id="exampleModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Note</h5>
                            <button 
                                type="button" 
                                className="close" 
                                data-dismiss="modal" 
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="noteTitle">Title</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="noteTitle" 
                                    value={note.etitle} 
                                    onChange={(e) => setNote({ ...note, etitle: e.target.value })} 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="noteDescription">Description</label>
                                <textarea 
                                    className="form-control" 
                                    id="noteDescription" 
                                    value={note.edescription} 
                                    onChange={(e) => setNote({ ...note, edescription: e.target.value })} 
                                ></textarea>
                            </div>
                            {/* Add more inputs for tag if necessary */}
                        </div>
                        <div className="modal-footer">
                            <button 
                                type="button" 
                                className="btn btn-secondary" 
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-primary" 
                                onClick={() => {
                                    // Save changes logic here
                                    // Call an update function or API
                                    showAlert("Note updated successfully!", "success");
                                    ref.current.click(); // Close the modal after saving
                                }}
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointments;
