import React, { useState } from 'react';
import {Link} from 'react-router-dom';


interface MyFormValues {
    firstname: string;
    lastname: string;
    email: string;
    message: string
  }

export default function Login() {
    
    const [email, setEmail] = useState("")
    const [password, setPassord] = useState("")

    return (
        <>
            <div id="form">
                <div id="intro">
                    <h1>Connexion / Inscription</h1>
                </div>
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
                id="password_input"
                name="password"
                placeholder="votre mot de passe"
                value={password}
                onChange={(e)=>setPassord(e.target.value)}
            />
            <label>
                <input type="checkbox" />
                Rester connecté
            </label>
            <button>
                se connecter
            </button>
            <button>
            <Link to="/">créer un compte </Link>
            </button>
            </div>
        </>
    );
}
