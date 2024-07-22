import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { useState } from "react";
import { useUserContext } from "../Context/UserContext";

export default function LoginTemplate() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const{user, setUser} = useUserContext()
    console.log(userEmail, user)
  return (
    <MDBContainer fluid className="p-3 my-5 ">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://en.pimg.jp/102/262/279/1/102262279.jpg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>


         {user.email? <>{user.email} Signed In <br/><br/>
         <MDBBtn className="mb-4 w-100" size="lg" onClick={() => setUser({})}>Sign Out</MDBBtn>
         </>
         
         :<> <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"  onChange={(e) => setUserEmail(e.target.value)} />
          
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setUserPassword(e.target.value)}/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
          </div>

          <MDBBtn className="mb-4 w-100" size="lg" onClick={() => setUser({email: userEmail})}>Sign in</MDBBtn></> }

         
        </MDBCol>

      </MDBRow>


    </MDBContainer>
  );
}
