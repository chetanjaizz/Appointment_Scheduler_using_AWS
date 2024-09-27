import React, { useState, useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import "./../../src/App.css"

const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", category: "", doctor: "" });

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.category, note.doctor);
        setNote({ title: "", description: "", category: "", doctor: "" });
        props.showAlert("Added Successfully", "success");
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <div className="container text-white my-3 py-3" style={{ backgroundColor: '#03256c', borderRadius: 20 }}>
            <h2 style={{marginLeft :"5%"}}>Set an Appointment</h2>
            <form className='my-3'>
                <div className="mb-3 title">
                    <label htmlFor="tltle" className="form-label">Title</label>
                    <input type="text" rows="4" cols="50" value={note.title} style={{ height: 80 }} className="form-control input-xl" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3 description">
    <label htmlFor="description" className="form-label">Description</label>
    <textarea
        value={note.description}
        style={{ height: 80, overflowY: 'auto' }} // Allow vertical scrolling
        className="form-control"
        id="description"
        name="description"
        onChange={onChange}
        minLength={5}
        required
        rows={3} // You can adjust the number of visible rows
    />
</div>
                <div className='dropdown-div'>
                    <div className="mb-3" style = {{width : "50%"}}>
                        <label htmlFor="category" className="form-label">Select a category</label>
                        <select className="form-control" id="category" name="category" value={note.category} onChange={onChange} required>
                            <option value="">Select the category</option>
                            <option value="Cardiologist">Cardiologist</option>
                            <option value="Neurologist">Neurologist</option>
                            <option value="Dermatologist">Dermatologist</option>
                            <option value="Psychiatrist">Psychiatrist</option>
                            <option value="Gastroenterologist">Gastroenterologist</option>
                        </select>
                    </div>  
                    <div className="mb-3" style = {{width : "50%"}}>
                        <label htmlFor="doctor" className="form-label">Select a Doctor</label>
                        <select className="form-control" id="doctor" name="doctor" value={note.doctor} onChange={onChange} required>
                            <option value="">Select the doctor</option>
                            <option value="Dr. Vinay Kushwaha">Dr. Vinay Kushwaha</option>
                            <option value="Dr. Ramakrishna Balani">Dr. Ramakrishna Balani</option>
                            <option value="Dr. Rupesh Modi">Dr. Rupesh Modi</option>
                            <option value="Dr. Pawan Kalyan">Dr. Pawan Kalyan</option>
                            <option value="Dr. Ram Arora">Dr. Ram Arora</option>
                        </select>
                    </div>
                </div>

                <button style ={{marginLeft :"5%"}}disabled={note.title.length < 1 || note.description.length < 1} type="submit" className="btn py-2 btn-primary" onClick={handleClick}>Add Appointment</button>
            </form>
        </div>
    );
}

export default AddNote;
