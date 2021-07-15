import React, {useState, useEffect} from 'react';
import './App.css';
import Homepage from './Components/Landing/Homepage';

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


  return (
    <div>
      <Homepage updateToken={updateToken}/>
    </div>
  );
}

export default App;
