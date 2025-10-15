import '../home_styles/slides.css';
import { Link } from 'react-router';

function Slides({ imgURL }) {

    let infos = [
        {
            name: "Via Verdi 19",
            description: "Un rifugio accogliente dove rilassarsi e sentirsi a casa, a due passi dal Lago di Garda.",
        },
    ];

    return (
        <div className="item" style={{ background: `url(./src/assets/Immagini_sito/${imgURL})` }}>
            <div className="content">
                <div className="name">{infos[0].name}</div>
                <div className="description">
                    {infos[0].description}

                </div>
                <Link to="/gallery" className="gallery-link">
                    <button className="animated-button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                        <span className="text">Galleria</span>
                        <span className="circle"></span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                    </button>
                </Link>
            </div>
        </div >
    )
}

export default Slides;