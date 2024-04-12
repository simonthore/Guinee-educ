import { Link } from "react-router-dom";
import Mapado from "../assets/images/mapado_logo.png";
import directions from "../assets/images/directions.png";
import Slider from "../components/Slider";

export default function Home() {
    return (
        <>
            <div className="description-text">
            {/* <Slider/> */}
                <p>
                L'association Guinée-Educ est une ONG humanitaire à but non lucratif qui
                permet d'aider les enfants non scolarisés et en particulier les orphelins
                et ceux qui sont abandonnés en Guinée un pays de l'Afrique de l'ouest où 
                le taux d'analphabétisme et les manques de ressources financiers ne cesse d'augmenter.
                Nous voulons également donner une chance à ceux qui ont pas eu accès à l'éducation.
                </p>
            </div>
            <div>
                <p className="test">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Natus impedit quae exercitationem similique nam vel perferendis ratione. 
                    Ullam fugit quos et nemo illo saepe necessitatibus, excepturi quibusdam dolorum doloremque 
                    officiis.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quas aliquam delectus quam vitae cum quos non ut! Pariatur vitae eaque excepturi corporis numquam! Dolorem ad praesentium recusandae voluptate laudantium?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae inventore laborum earum voluptatum, quo obcaecati, tempora consectetur eum commodi id libero expedita consequatur voluptas necessitatibus dolor, vero autem placeat adipisci.
                </p>
            </div>
        </>
    );
}
