
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';

import getAuth from './helpers/getAuth';

import './App.css';


function App() {

  const [email,setEmail] = useState('');
  const [key,setKey] = useState('');
  const users = [
    {
      "email": "JohnSmith@email.com",
      "key": "johnsmith"
    },
    {
      "email": "JaneDoe@email.com",
      "key": "janedoe"
    },
    {
      "email": "BobbyLee@email.com",
      "key": "bobbylee"
    }
  ];

  const [authenticatedUser,setAuthenticatedUser] = useState(false);

  const checkUserAuth = (e) => {
    e.preventDefault();
    // console.log(getAuth(users,email,key));
    setAuthenticatedUser(getAuth(users,email,key));
    console.log(authenticatedUser);

    authenticatedUser ? (
      toast.success("Successfully LoggedIn")
    ) : (
      toast.error("Invalid Email/Password")
    )
  };


  return (
    <div className="App">
      <div>
        <Toaster />

        {authenticatedUser ? (

          <p className='container'>
            Content for authenticated users.
          </p>

        ) : (

          <div className="container ">

            <form onSubmit={checkUserAuth}
            className="input-form center-items"
            >
              <label className="label"
              >Email
              </label>
              <input name="EMAIL" type="email" required
                  className="input p-2"
                  value={email} onChange={(e) => setEmail(e.target.value)}
              />
               
                
              <label className="label"
              >Password
              </label>
              <input name="KEY" type="password" required
                  className="input p-2"
                  value={key} 
                  onChange={async (e) => setKey(e.target.value)}
              />
                
                
              <button type="submit">Login</button>
            </form>
          </div>
        )}
        
      </div>
      
    </div>
  );
}

export default App;
