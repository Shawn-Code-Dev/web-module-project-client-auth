import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axiosWithAuth from './utilities/axiosWithAuth';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Logout from './components/Logout';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import FriendForm from './components/FriendForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(false)

  const getFriends = async () => {
    setLoading(true);
    await axiosWithAuth()
      .get('/friends')
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      })
    setLoading(false);
  }
  
  useEffect(() => {
    localStorage.getItem('token') && setIsLoggedIn(true)
  }, [])

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Friends!</h1>
        </header>
        <div>       
          <Navbar isLoggedIn={isLoggedIn}/>
          <Switch>
            
            <Route exact path='/'>
              <Login setIsLoggedIn={setIsLoggedIn}/>
            </Route>
            
            <Route path='/login'>
              <Login setIsLoggedIn={setIsLoggedIn} getFriends={getFriends}/>
            </Route>
            
            <PrivateRoute path='/logout'>
              <Logout setIsLoggedIn={setIsLoggedIn}/>
            </PrivateRoute>
            
            {/* <PrivateRoute path='/friends'>
              <FriendsList getFriends={getFriends} friends={friends} loading={loading}/>
            </PrivateRoute> */}

            <PrivateRoute path='/friends' render={(props) => <FriendsList {...props} getFriends={getFriends} friends={friends} loading={loading}/>}/>

            <PrivateRoute path='/friendform'>
              <FriendForm/>
            </PrivateRoute>

          </Switch>        
        </div>
      </div>
    </Router>
  );
}

export default App;
