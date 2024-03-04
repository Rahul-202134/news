import React, {useState} from 'react'
import { Link,useNavigate} from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Login() {
  const [userData, setUserData] = useState(null);
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
let navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/loginusers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert('Enter valid Credentials');
    }
    if(json.success) {
      setUserData(json.users);
      localStorage.setItem("authToken",json.authToken);
      navigate("/");
      
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <>
    <Navbar/>
    <div className="container form-top">
    {userData ? (
          <span>Welcome {userData.name}</span>
          ):(
            <span>Welcome Guest</span>
          )}
        <form onSubmit={handleSubmit}>
        <div className='row justify-content-center '>
        <div className="col-lg-4" style={{background:'#80ffff',borderRadius:'10px'}}>
        <h2 className='form'>Login Here</h2>
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
              We'll never share your email with anyone else.
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

          <button type="submit" className="m-3 btn btn-primary">
            Submit
          </button>
          <Link to="/Signup" className="m-3 btn btn-danger">
            Signup
          </Link>
          </div>
          </div>
        </form>
      </div>
    </>
  )
}
