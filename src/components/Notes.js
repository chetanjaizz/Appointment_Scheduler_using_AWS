import React, { useEffect, useRef, useState } from 'react'
import noteContext from "../context/notes/noteContext"
import { useContext } from 'react'
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import MailForm from './MailForm';
import { message } from "antd";
import "./MyForm.css";
import Appointments from './Appointments';


// import './MyForm.css';
// import MyForm from './MyForm';


const Notes = (props) => {


  /////////////////////////////////////////////////////////////////////////////////////////////
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Date time conversion to UTC
  function convertDate(date, time) {
    // Construct datetime string
    const dateTimeString = `${date}T${time}:00`;
    const localTimestamp = new Date(dateTimeString);

    // Get timezone offset in minutes
    const timezoneOffsetMinutes = localTimestamp.getTimezoneOffset();

    // Adjust the timestamp by adding the timezone offset
    const adjustedTimestamp = new Date(localTimestamp.getTime() - timezoneOffsetMinutes * 60000);

    // Convert adjusted timestamp to ISO string
    const formattedTimestamp = adjustedTimestamp.toISOString().slice(0, -5); // Remove milliseconds and 'Z'
    console.log("formattedTimestamp", formattedTimestamp); // Output: "2024-04-10T03:25:00"

    const localDate = new Date(formattedTimestamp);

    // Extract individual components (UTC)
    const utcYear = localDate.getUTCFullYear();
    const utcMonth = localDate.getUTCMonth() + 1;
    const utcDayOfMonth = localDate.getUTCDate();
    const utcHour = localDate.getUTCHours();
    const utcMinute = localDate.getUTCMinutes();

    // Prepare cron expression for one-time execution
    return { utcMinute, utcHour, utcDayOfMonth, utcMonth, utcYear };
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let { utcMinute, utcHour, utcDayOfMonth, utcMonth, utcYear } = convertDate(date, time);
  //   console.log(utcMinute, utcHour, utcDayOfMonth, utcMonth, utcYear);

  //   let requestObj = {
  //     recipient: email,
  //     cronExpression: {
  //       utcYear: utcYear,
  //       utcMonth: utcMonth,
  //       utcDayOfMonth: utcDayOfMonth,
  //       utcHour: utcHour,
  //       utcMinute: utcMinute,
  //     },
  //     message: description,
  //     subject: subject,
  //   };

  //   const url = "https://x7iffr1d18.execute-api.us-east-1.amazonaws.com/dev/sendEmail";

  //   // Define the API key
  //   const apiKey = "zpP4aqkCbE6zzShBuD7tnz/2yD8bCOt/z9lcp/B2";

  //   // Define the headers, including the API key
  //   const headers = {
  //     "x-api-key": apiKey,
  //     "Content-Type": "application/json",
  //     // Adjust content type if necessary
  //   };

  //   // Make the POST request using Axios
  //   try {
  //     let response = await axios.post(url, requestObj, { headers });
  //     console.log("response", response);
  //     if (response.data.statusCode === 200) {
  //       message.success("Message sent successfully!");
  //       setEmail("");
  //       setSubject("");
  //       setDescription("");
  //       setDate("");
  //       setTime("");
  //     }
  //   } catch (error) {
  //     console.log("error", error);
  //     message.error("Failed to send message!");
  //   }
  // };
  /////////////////////////////////////////////////////////////////////////////////////////////

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { utcMinute, utcHour, utcDayOfMonth, utcMonth, utcYear } = convertDate(date, time);

    let requestObj = {
        recipient: email,
        cronExpression: {
            utcYear: utcYear,
            utcMonth: utcMonth,
            utcDayOfMonth: utcDayOfMonth,
            utcHour: utcHour,
            utcMinute: utcMinute,
        },
        message: description,
        subject: subject,
        createdAt: new Date().toISOString() // Store the current date and time
    };

    // Continue with the rest of your API call...
};

  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    description: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    axios.post('https://example.com/api/formdata', formData)
      .then(response => {
        console.log('Form data successfully submitted:', response.data);
        // You can perform any additional actions here after successful submission
      })
      .catch(error => {
        console.error('Error submitting form data:', error);
      });
  };

  const context = useContext(noteContext);
  let navigate = useNavigate();
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes()
    }
    else {
      navigate("/login")
    }
    // eslint-disable-next-line
  }, [])

  // const updateNote = (currentNote) => {
  //   ref.current.click();
  //   setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
  // }
  const updateNote = (currentNote) => {
    ref.current.click();
    setEmail(""); // Set this to the recipient's email if needed
    setSubject(currentNote.title); // Use note title as subject
    setDescription(currentNote.description); // Use note description
    setDate(""); // Optional: Set default date
    setTime(""); // Optional: Set default time
}


  const ref = useRef(null)
  const refClose = useRef(null)

  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "default" })


  const handleClick = (e) => {
    console.log("updating the note", note)
    editNote(note.id, note.etitle, note.edescription, note.etag)
    refClose.current.click();
    props.showAlert("Updated Successfully", "success");
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Schedule</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>


            {/* //////////////////////////////////////////////////////////////////////////////////////// */}
        
            <form className="container p-4 shadow-sm rounded bg-light" onSubmit={handleSubmit}>
  <h3 className="text-center mb-4">Schedule this appointment</h3>

  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email:</label>
    <input
      type="email"
      className="form-control"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter receiver's email"
      required
    />
  </div>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title:</label>
    <input
      type="text"
      className="form-control"
      id="title"
      value={subject} // This is now the title
      onChange={(e) => setSubject(e.target.value)}
      placeholder="Enter the title"
      required
    />
  </div>

  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description:</label>
    <textarea
      id="description"
      className="form-control"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      rows="3"
      placeholder="Describe the purpose"
      required
    />
  </div>

  <div className="row mb-3">
    <div className="col-md-6">
      <label htmlFor="date" className="form-label">Date:</label>
      <input
        type="date"
        className="form-control"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
    </div>

    <div className="col-md-6">
      <label htmlFor="time" className="form-label">Time:</label>
      <input
        type="time"
        className="form-control"
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
    </div>
  </div>

  <div className="text-center">
    <button type="submit" className="btn btn-primary px-4">Send</button>
  </div>
</form>


            {/* //////////////////////////////////////////////////////////////////////////////////////// */}



          </div>
        </div>
      </div>
      <div className="container row my-3">
        <h2>Appoinments to be schedule</h2>
        <div className="container mx-2">
          {notes.length === 0 && 'No appoinments to display'}
        </div>
        {notes.map((note) => {
    return (
        <NoteItem 
            key={note._id} 
            showAlert={props.showAlert} 
            updateNote={updateNote} 
            note={{ ...note, createdAt: note.createdAt }} // Make sure createdAt is included
        />
    );
})}

      </div>

    </>
  )
}

export default Notes
