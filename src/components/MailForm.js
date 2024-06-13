

// import React, { useState } from "react";
// import axios from "axios";
// import { message } from "antd";
// import "./MyForm.css";

// const MailForm = (props) => {

//     // const thisss = props.updates;
//     // State variables to store form input values
//     const [email, setEmail] = useState("");
//     const [subject, setSubject] = useState("");
//     const [description, setDescription] = useState("");
//     const [date, setDate] = useState("");
//     const [time, setTime] = useState("");

//     // Date time conversion to UTC
//     function convertDate(date, time) {
//         // Construct datetime string
//         const dateTimeString = `${date}T${time}:00`;
//         const localTimestamp = new Date(dateTimeString);

//         // Get timezone offset in minutes
//         const timezoneOffsetMinutes = localTimestamp.getTimezoneOffset();

//         // Adjust the timestamp by adding the timezone offset
//         const adjustedTimestamp = new Date(localTimestamp.getTime() - timezoneOffsetMinutes * 60000);

//         // Convert adjusted timestamp to ISO string
//         const formattedTimestamp = adjustedTimestamp.toISOString().slice(0, -5); // Remove milliseconds and 'Z'
//         console.log("formattedTimestamp", formattedTimestamp); // Output: "2024-04-10T03:25:00"

//         const localDate = new Date(formattedTimestamp);

//         // Extract individual components (UTC)
//         const utcYear = localDate.getUTCFullYear();
//         const utcMonth = localDate.getUTCMonth() + 1;
//         const utcDayOfMonth = localDate.getUTCDate();
//         const utcHour = localDate.getUTCHours();
//         const utcMinute = localDate.getUTCMinutes();

//         // Prepare cron expression for one-time execution
//         return { utcMinute, utcHour, utcDayOfMonth, utcMonth, utcYear };
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         let { utcMinute, utcHour, utcDayOfMonth, utcMonth, utcYear } = convertDate(date, time);
//         console.log(utcMinute, utcHour, utcDayOfMonth, utcMonth, utcYear);

//         let requestObj = {
//             recipient: email,
//             cronExpression: {
//                 utcYear: utcYear,
//                 utcMonth: utcMonth,
//                 utcDayOfMonth: utcDayOfMonth,
//                 utcHour: utcHour,
//                 utcMinute: utcMinute,
//             },
//             message: description,
//             subject: subject,
//         };

//         const url = "https://x7iffr1d18.execute-api.us-east-1.amazonaws.com/dev/sendEmail";

//         // Define the API key
//         const apiKey = "zpP4aqkCbE6zzShBuD7tnz/2yD8bCOt/z9lcp/B2";

//         // Define the headers, including the API key
//         const headers = {
//             "x-api-key": apiKey,
//             "Content-Type": "application/json",
//             // Adjust content type if necessary
//         };

//         // Make the POST request using Axios
//         try {
//             let response = await axios.post(url, requestObj, { headers });
//             console.log("response", response);
//             if (response.data.statusCode === 200) {
//                 message.success("Message sent successfully!");
//                 setEmail("");
//                 setSubject("");
//                 setDescription("");
//                 setDate("");
//                 setTime("");
//             }
//         } catch (error) {
//             console.log("error", error);
//             message.error("Failed to send message!");
//         }
//     };

//     return (
//         <form className="center" onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor="email">Email:</label>
//                 <input
//                     type="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label htmlFor="subject">Subject:</label>
//                 <input
//                     type="text"
//                     id="subject"
//                     value={props.update.etitle}
//                     onChange={(e) => setSubject(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label htmlFor="description">Description:</label>
//                 <textarea
//                     id="description"
//                     value={des}
//                     onChange={(e) => setDescription(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label htmlFor="date">Date:</label>
//                 <input
//                     type="date"
//                     id="date"
//                     value={date}
//                     onChange={(e) => setDate(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label htmlFor="time">Time:</label>
//                 <input
//                     type="time"
//                     id="time"
//                     value={time}
//                     onChange={(e) => setTime(e.target.value)}
//                     required
//                 />
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default MailForm;
