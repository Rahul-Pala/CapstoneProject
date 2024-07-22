import React from 'react'
import { useState } from "react";
import { useUserContext } from "../Context/UserContext";


   export default function LoginForm() {
    // input state values always need to be strings - empty initially
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const{user, setUser} = useUserContext()
    console.log(userEmail, user)
    return (
      <div className="LoginForm componentBox background">
        <div className="formRow">
          <label>Email Address: 
            {/* Controlled form element needs both value and onChange.
             onChange handler uses event param e to access target value.
             Whenever user types, new value is stored in state. */}
            <input type="email" value={userEmail} name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)} />
          </label>
        </div>
        <div className="formRow">
          <label>Password:            
            <input type="password" value={userPassword} name="password"
              onChange={(e) => setUserPassword(e.target.value)} />  
          </label>  
        </div>  
        <button onClick={() => setUser({email: userEmail})}>Login</button>          
      </div>
      )
   }
   // try removing the onChange prop and typing in a field
  
