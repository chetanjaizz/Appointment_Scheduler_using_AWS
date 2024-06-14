import React, { useEffect, useContext } from 'react'
import './about_section.css';


const About = () => {
  
  return (
    <div className="about-section">
      <h2>Welcome to BLINK</h2>
      <p>Your go-to platform for seamless appointment scheduling and email management.</p>
      <p>Whether you're a busy professional, a small business owner, or simply someone juggling multiple commitments, our user-friendly interface empowers you to take control of your schedule effortlessly.</p>
      
      <div className="key-features">
        <h3>Key Features:</h3>
        <ol>
          <li><strong>Appointment Scheduling:</strong> Say goodbye to endless phone calls and email chains. Our intuitive scheduling tool allows you to book appointments in just a few clicks, ensuring that your calendar stays organized and your time is maximized.</li>
          <li><strong>Email Management:</strong> Stay on top of your inbox with our email scheduling feature. Whether you need to send reminders, follow-ups, or important announcements, our platform lets you draft and schedule emails ahead of time, so you can focus on what matters most.</li>
        </ol>
      </div>
      
      <p>BLINK is designed for anyone seeking efficient and convenient appointment scheduling and email management solutions. From professionals managing client meetings to individuals coordinating personal events, our platform adapts to your unique needs.</p>
      
      <p>Join thousands of satisfied users who have simplified their scheduling and communication processes with BLINK. Sign up today and take the first step towards reclaiming your time.</p>
    </div>
  )
}

export default About
