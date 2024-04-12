import React, { useState } from 'react';
import moi from "../assets/moi.png";
import simon2 from "../assets/simon2.png"
import simon3 from "../assets/simon3.png"


interface MyFormValues {
  firstname: string;
  lastname: string;
  email: string;
  message: string
}

export default function Contact() {

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")



  return (
    <div id="form">
      <div id="employee-container">
        <img src= {moi} alt="moi" />
        <img src= {simon2} alt="moi" />
        <img src= {simon3} alt="moi" />
      </div>
      <div id="intro">
        <h1>Nous contacter</h1>
      </div>
      <input
        type="text" 
        id="lastname_input"
        name="lastname" 
        placeholder="nom"
        value={lastname}  
        onChange={(e) => setLastname(e.target.value)} 
      />
      <input
        type="text" 
        id="firstname_input"
        name="firstname" 
        placeholder="prénom"
        value={firstname}  
        onChange={(e) => setFirstname(e.target.value)} 
      />
      <input
        type="text"
        id="email_input"
        name="email"
        placeholder="votre adresse mail"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
    />
      <input
        type="text"
        id="message_input"
        name="message"
        placeholder="vous pouvez nous écrire ici"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        />
    </div>
  );
}
