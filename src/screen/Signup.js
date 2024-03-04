import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    geolocation: '', 
  });
  let navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/createusers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert('Enter valid Credentials');
    }
    navigate("/Login");
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className='row justify-content-center form-top'>
          <div className="col-lg-4" style={{background:'#80ffff',borderRadius:'10px',boxShadow:'revert-layer'}}>
          <h2 className='form'>Resister Here</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={credentials.name}
              onChange={onChange}
              className="form-control"
              placeholder='Enter the name'
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              className="form-control"
              placeholder='Enter the email'
            />
            <div id="emailHelp" className="form-label">
              <label>We'll never share your email with anyone else.</label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              className="form-control"
              placeholder='Enter the password'
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Location
            </label>
            <input
              type="text"
              name="geolocation"
              value={credentials.geolocation}
              onChange={onChange}
              className="form-control"
              placeholder='Enter the location'
            />
          </div>

          <button type="submit" to="/Login" className="m-3 btn btn-primary">
            Submit
          </button>
          <Link to="/Login" className="m-3 btn btn-danger">
            Already have an Account?
          </Link>
          </div>
          </div>
        </form>
      </div>
    </>
  );
}
