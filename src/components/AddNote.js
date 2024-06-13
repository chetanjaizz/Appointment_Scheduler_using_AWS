import React, { useState, useContext } from 'react'
import noteContext from '../context/notes/noteContext';

const AddNote = (props) => {
    const context = useContext(noteContext);
  const {addNote} = context;
  const[note, setNote] = useState({title: "", description:"", tag:""})
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title: "", description:"", tag:""});
    props.showAlert("Added Successfully", "success");
  }

  const onChange = (e) => {
    setNote({...note, [e.target.name]:e.target.value})
  }
  return (
    <div className="container text-white my-3  py-3"  style={{backgroundColor:'#03256c' , borderRadius:20}}>
      <h2>Set an Appointment</h2>
      <form className='my-3'>
        <div className="mb-3">
          <label htmlFor="tltle" className="form-label">Title</label>
          <input type="text" rows="4" cols="50" value={note.title} style={{height:80}} className="form-control input-xl" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" value={note.description} style={{height:80}} className="form-control" id="description" name="description" onChange={onChange} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input style={{height:80}} type="text" value={note.tag} className="form-control" id="tag" name="tag" onChange={onChange} minLength={5} required/>
        </div>
        
        <button disabled={note.title.length<1 || note.description.length<1} type="submit" className="btn py-2  btn-primary" onClick={handleClick}>Add Appointment</button>
      </form>

      </div>
  )
}

export default AddNote
