import React from 'react'
//CONTROLLED FORM ELEMENT
import { useState} from "react"

function CreateAccountForm()
{
    const [userNameElement, setUserName] =useState(" ")
    const [userEmailElement, setEmail] =useState(" ")
    const [userPasswordElement, setPassword] =useState(" ")

    function handleFormSubmission()
    {
        let Username = userNameElement //document.getElementById("txtUserName").value;
        let email = userEmailElement   //document.getElementById("txtEmail").value;
        let password = userPasswordElement //document.getElementById("txtPassword").value;
        alert(Username + " " + email + " " + password)

    }
    return(
        <div>
            <label>User Name:</label>
            <input type="text" id="txtUserName" value={userNameElement} onChange={(e) => setUserName(e.target.value)}></input><br></br>
            <label>Email:</label>
            <input type="email" id="txtEmail" value={userEmailElement} onChange={(e) => setEmail(e.target.value)}></input><br></br>
            <label>Password:</label>
            <input type="password" id="txtPassword" value={userPasswordElement} onChange={(e) => setPassword(e.target.value)}></input><br></br>
            <input type="button" onClick={handleFormSubmission} value="Submit"></input>
        </div>
    )

}
export default CreateAccountForm
