    import {Link} from 'react-router-dom';
    import user from '../assets/user.png';


    export default function NavBar({children, customClass}){
        return(
            <div className="big" >
                <div className="links">
                    <h1>Guinée-Educ</h1>
                    <Link to="/">Accueil</Link>
                    <p>Nous découvrir</p>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/Login">
                    <button className="login-button">
                        <img src={user} alt='user'></img>
                        Me connecter
                        </button>
                        </Link>
                    <button><Link to="/Donation">Faire un don</Link></button>
                </div>
            </div>
        )
    }