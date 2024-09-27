import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = (props) => {
    const [credentials, setCredentials] = useState({email:"", password:""})
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch("")
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'            },
                body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json();
        console.log(json);
        if (json.success){
            //save the auth token and redirect it
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Logged in successfully", "success")
            navigate("/")

        }
        else{
            props.showAlert("Invalid Details", "danger")

        }
    }

    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]:e.target.value})
      }
  return (
   <div className="login-container d-flex align-items-center justify-content-center vh-100 bg-light">
  <div className="card p-4 shadow-sm rounded-lg" style={{ maxWidth: '400px', width: '100%' }}>
    <h3 className="text-center mb-4">Login to continue to Blink</h3>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input 
          type="email" 
          value={credentials.email} 
          className="form-control border-0 shadow-sm rounded" 
          id="email" 
          name="email" 
          onChange={onChange} 
          aria-describedby="emailHelp" 
          placeholder="Enter your email" 
        />
        <div id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input 
          type="password" 
          value={credentials.password} 
          className="form-control border-0 shadow-sm rounded" 
          id="password" 
          name="password" 
          onChange={onChange} 
          placeholder="Enter your password" 
        />
      </div>
      <button 
        type="submit" 
        className="btn btn-primary w-100 shadow-sm rounded-pill mt-3"
        style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}
      >
        Login
      </button>
    </form>
  </div>
</div>

  )
}

export default Login
