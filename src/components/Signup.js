import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      navigate("/");
      props.showAlert("Account Created Successfully", "success");
    } else {
      props.showAlert("Invalid Credentials. Please correct the credentials.", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="card shadow-lg p-4">
            <div className="card-header bg-primary text-white text-center">
              <h2>Create an Account to Continue to Blink</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={onChange}
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    minLength={5}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="cpassword"
                    name="cpassword"
                    placeholder="Confirm your password"
                    minLength={5}
                    onChange={onChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Sign Up
                </button>
              </form>
            </div>
            <div className="card-footer text-center">
              <small className="text-muted">Already have an account? <a href="/login" className="text-primary">Log in</a></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
