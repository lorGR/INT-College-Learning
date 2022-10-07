import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import './App.css';

function App() {

  const [user, setUser] = useState<object>({});

  const handleGoogleLogin = (response: any) => {
    try {
      // console.log(response.credential);
      const userData = jwtDecode<object>(response.credential);
      console.log(userData);
      setUser(userData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    /* google login */
    //@ts-ignore
    google.accounts.id.initialize({
      client_id: "17419079918-81mfrkd9k6iq5irqlluh78j2jt465gjl.apps.googleusercontent.com",
      callback: handleGoogleLogin
    });

    //@ts-ignore
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    )

  }
    , [])
  return (
    <div className="App">
      <div id="signInDiv"></div>
      {Object.keys(user).length > 0 &&
        <div>
          {/* @ts-ignore */}
          <img src={user.picture} alt={user.picture} />
          {/* @ts-ignore */}
          <p>{user.name}</p>
        </div>
      }
    </div>
  );
}

export default App;
