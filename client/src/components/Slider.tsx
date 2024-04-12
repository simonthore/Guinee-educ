import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Cat1 from "../assets/Cat1.jpg";
import Cat2 from "../assets/Cat2.jpg";
import Cat3 from "../assets/Cat3.jpg";
import Cat4 from "../assets/Cat4.jpg";


export default function Slider() {
    const baseUrl = "http://react-responsive-carousel.js.org/assets/"
    const data = [
        {
            id: 1,
            image: Cat1,
            title: "Slide 1",
            description: "Malgré son handicap, il poursuit son rêve",
            interval: 5000,
        },
        {
            id: 2,
            image: Cat2,
            title: "Slide 2",
            description: "Merci à vous",
            interval: 5000,
        },
        {
            id: 3,
            image: Cat3,
            title: "Slide 3",
            description: "Première rencontre avec le gouvernement",
            interval: 5000,
        }
    ]



    return (
        <div className="global">
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={5000} 
                className="toto">
                   {data.map((item) => (
                    <div className="total" key={item.id} style={{ height: "100%" }}>
                        <img src={item.image} alt={item.title} style={{ height: "100%" }} />
                        <p className="legend">{item.description}</p>
                    </div>
                ))}
            </Carousel>
        </div>

    );
};


