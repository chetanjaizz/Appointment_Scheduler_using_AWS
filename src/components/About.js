import React from 'react';
import './About.css';


const About = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h2 className="display-4 mb-4">Welcome to <span className="text-primary">BLINK</span></h2>
          <p className="lead mb-5">Your go-to platform for seamless appointment scheduling and email management.</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card border-0 shadow-lg">
            <div className="card-body">
              {/* <p className="mb-4">Whether you're a busy professional, a small business owner, or simply someone juggling multiple commitments, our user-friendly interface empowers you to take control of your schedule effortlessly.</p> */}
              <div className="key-features">
                <h3 className="mb-4 text-center text-primary">Key Features:</h3>
                <ol className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Appointment Scheduling:</strong> Say goodbye to endless phone calls and email chains. Our intuitive scheduling tool allows you to book appointments in just a few clicks, ensuring that your calendar stays organized and your time is maximized.
                  </li>
                  <li className="list-group-item">
                    <strong>Email Management:</strong> Stay on top of your inbox with our email scheduling feature. Whether you need to send reminders, follow-ups, or important announcements, our platform lets you draft and schedule emails ahead of time, so you can focus on what matters most.
                  </li>
                </ol>
              </div>
              {/* <p className="mt-4">BLINK is designed for anyone seeking efficient and convenient appointment scheduling and email management solutions. From professionals managing client meetings to individuals coordinating personal events, our platform adapts to your unique needs.</p> */}
              {/* <p className="text-center mt-5"><strong>Join thousands of satisfied users</strong> who have simplified their scheduling and communication processes with <span className="text-primary">BLINK</span>. Sign up today and take the first step towards reclaiming your time.</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
