import { useState } from "react";
import axios from "axios";
import { ReactSession } from 'react-client-session';
import { useHistory } from "react-router-dom";
import './Register.scss'

const Login = () => {  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const user = {
      'email': email,
      'password': password,
    }

    axios.post('http://localhost:8001/users/login', user)
      .then((response) => {
        const userObject = response.data.user
        console.log('Successful Login ', userObject);
        ReactSession.set("id", userObject.id);
        ReactSession.set("role", userObject.role);
        ReactSession.set("name", userObject.name);
        history.push('/')
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });    
  }

  return (
    <div className="wrapper" id="register-wrapper">
      <h2 className="title">Login</h2>
      <form className="registration-form" onSubmit={handleSubmit}>        
        <div className="inputfield">
          <label>Email</label>
            <input
              type="text" 
              className="input"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
        </div>
        <div className="inputfield">
          <label>Password</label>
            <input
              type="password"
              className="input"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
        </div>
        <div className="inputfield">
          <input type="submit" value="Login" className="btn"/>
        </div>        
      </form>
    </div>  
  )
}

export default Login;