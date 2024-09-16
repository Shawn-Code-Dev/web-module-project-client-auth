import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utilities/axiosWithAuth';


const Logout = ({ setIsLoggedIn }) => {
  const history = useHistory();
  useEffect(() => {
    axiosWithAuth()
      .post('/logout')
      .then(() => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        history.push('/')
      }) // eslint-disable-next-line
  },[])
  return (
    <div>
      
    </div>
  )
}

export default Logout
