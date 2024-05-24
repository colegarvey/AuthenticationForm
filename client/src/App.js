
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';

import './App.css';

function App() {

  const users = [
    {
      "email": "JohnSmith@email.com",
      "key": ""
    }
  ];
  const [email,setEmail] = useState('');
  const [key,setKey] = useState('');


  const [authenticatedUser,setAuthenticatedUser] = useState(false);
  const getAuthentication = () => {
    for (let user in users) {
      if (user.email === email){
        if (user.key === key) {
          setAuthenticatedUser(true);
        }
      }
    }
  };
 

  const notifyToast = () => {
      toast.promise(
          getAuthentication(),
          {
              loading: "Authenticating..",
              success: <b>Login successful.</b>,
              error: <b>Invalid email/password.</b>
          }
      );
  }


  return (
    <div className="App">
      <div>
        <Toaster />

        {authenticatedUser ? (

          <p>Content for authenticated users.</p>

        ) : (

          <div className="container ">

            <form onSubmit={notifyToast}
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
