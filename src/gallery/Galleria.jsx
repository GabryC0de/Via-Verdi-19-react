import Header from "../home/home_components/header.jsx";

function Gallery() {
    return (
        <>
            <Header></Header>
            <div class="cont">
                <div class="soggiorno stanze">
                    <div class="sottotitolo">
                        <h3 class="Titoli-foto">Soggiorno</h3>
                    </div>
                    <div class="immagini"></div>
                </div>
                <div class="cucina stanze">
                    <div class="sottotitolo">
                        <h3 class="Titoli-foto">Cucina</h3>
                    </div>
                    <div class="immagini"></div>
                </div>
                <div class="camere stanze">
                    <div class="sottotitolo">
                        <h3 class="Titoli-foto">Camere</h3>
                    </div>
                    <div class="immagini"></div>
                </div>
                <div class="bagno stanze">
                    <div class="sottotitolo">
                        <h3 class="Titoli-foto">Bagno</h3>
                    </div>
                    <div class="immagini"></div>
                </div>
                <div class="esterno stanze">
                    <div class="sottotitolo">
                        <h3 class="Titoli-foto">Esterno</h3>
                    </div>
                    <div class="immagini"></div>
                </div>
            </div>
        </>
    )
}

export default Gallery;