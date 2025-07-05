import React, { useEffect, useState } from 'react';
import '../gallery_css/sections.css';

function Section({ title, ID }) {

    const [files, setFiles] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/get-filenames")
            .then((res) => res.json())
            .then((data) => {
                // Filtra i file con ID corrispondente e aggiorna lo stato
                const filteredFiles = data.files.filter(file => file[0] === ID);
                setFiles(filteredFiles);  // Imposta l'array completo
            })
            .catch((error) => {
                console.error("Errore durante la fetch:", error);
            });
    }, [ID]);  // Aggiungi ID come dipendenza se può cambiare

    return (
        <div className="stanze">
            <div>
                <h3>{title}</h3>
            </div>
            <div className="immagini">
                {
                    files.map((file, index) => (
                        <div key={index} className="image-container">
                            <img src={`./src/assets/Immagini_sito/${file}`}></img>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Section;