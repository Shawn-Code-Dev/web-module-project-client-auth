import React, { useState } from 'react'
import axiosWithAuth from '../utilities/axiosWithAuth';

const Login = ({setIsLoggedIn}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', {username, password})
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        setIsLoggedIn(true);
      })
      .catch(err => console.log(err))
    setUsername('')
    setPassword('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Username</p>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button type="submit" >Submit</button>
    </form>
  )
}

export default Login
