export default function NavBar({children, customClass}){
    return(
        <div className="big" >
            <div className="links">
                <h1>Guinée-Educ</h1>
                <p>Accueil</p>
                <p>Nous découvrir</p>
                <p>Contact</p>
                <button>faire une don</button>
            </div>
        </div>
    )
}