import React, {useState, useEffect} from 'react';
import './App.css';
import Landing from './Components/Landing/Landing';
import Homepage from './Components/Homepage/Homepage';

import SubmissionFrom from './Components/Homepage/SubmissionForm'
function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <Homepage token={sessionToken} logout={clearToken}/>
    : <Landing updateToken={updateToken}/>)
  }


  return (
    <div>
      {protectedViews()}
    </div>
  );
}

export default App;
