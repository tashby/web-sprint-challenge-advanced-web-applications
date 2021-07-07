import React, {useState} from "react";
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
    // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState({
    username:'',
    password:''
  })
  
  const login = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/bubble-page');
            })
            .catch(err => console.log({ err }));
    }

    const handleChange = e =>{
      setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
      })
    }

  return (
            <div>
                <form onSubmit = {login}>
                    <input
                        type='text'
                        name='username'
                        id='username'
                        placeholder='Username'
                        value = {credentials.username}
                        onChange = { handleChange}
                    />
                    <input
                        type='text'
                        name='password'
                        id='password'
                        placeholder='Password'
                        value = {credentials.password}
                        onChange = {handleChange}
                    />
                    <button>Log In</button>
                </form>
            </div>
        );
};

export default Login;
