import React, { useState } from 'react';
import moi from "../assets/moi.png";
import simon2 from "../assets/simon2.png"
import simon3 from "../assets/simon3.png"


interface MyFormValues {
  username: string;
  password: string
  email: string;
}

export default function CreateUser() {

  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")




  return (
    <div id="form">
      <div id="employee-container">
      </div>
      <div id="intro">
        <h1>Créer son compte</h1>
      </div>
      <input
        type="text" 
        id="username_input"
        className='main-input'
        name="username" 
        placeholder="nom d'utilisateur"
        value={username}  
        onChange={(e) => setUserName(e.target.value)} 
      />
      <input
        type="text" 
        id="passord_input"
        className='main-input'
        name="password" 
        placeholder="mot de passe"
        value={password}  
        onChange={(e) => setPassword(e.target.value)} 
      />
      <input
        type="text"
        id="email_input"
        className='main-input'
        name="email"
        placeholder="votre adresse mail"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
    />  
    <button>Créer son compte</button>
    </div>
  );
}
