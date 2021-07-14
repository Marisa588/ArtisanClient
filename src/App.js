import React, {useState, useEffect} from 'react';
import Auth from './auth/Auth'

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
  // Render method is below
  return (
    <div>
      <Auth updateToken={updateToken}/>
    </div>
  );
}

export default App;
