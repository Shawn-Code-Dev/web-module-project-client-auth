import React, { useState } from 'react'
import { useHistory } from 'react-router';
import axiosWithAuth from '../utilities/axiosWithAuth';

const FriendForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [err, setErr] = useState('')

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(name === '' || age === '' || email === '') {
      setErr('All fields are required')
    } else {
      await axiosWithAuth()
        .post('/friends', {name, age, email})
        .then(() => {
          history.push('/friendslist')
        })
        .catch(err => console.log(err))
    }
  }

  console.log(name, age, email)

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Name</p>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        <p>Age</p>
        <input type="text" value={age} onChange={e => setAge(e.target.value)} />
      </label>
      <label>
        <p>Email</p>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default FriendForm
