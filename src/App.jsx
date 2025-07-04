import { useState, useEffect } from 'react'
import './index.css'
import FadingWindow from './home/home_components/fadingWindow.jsx'
import Header from './home/home_components/header.jsx'
import Slides from './home/home_components/slides.jsx'

function App() {

  const [files, setFiles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/get-filenames")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.files);
        setFiles(data.files);
      })
      .catch((error) => {
        console.error("Errore durante la fetch:", error);
      });
  }, []);

  const [items, setItems] = useState(files);

  const handleNext = () => {
    setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
  };

  const handlePrev = () => {
    setItems((prevItems) => [
      prevItems[prevItems.length - 1],
      ...prevItems.slice(0, -1),
    ]);
  };

  return (
    <>
      {/* <FadingWindow
        title={"-- Via verdi 19 --"}
        subtitle={"La tua casa nel Verde"}>
      </FadingWindow> */}
      <Header></Header>
      <main>
        <div id="blurry-background">
          <div id="slider">
            <div className="container">
              <div className="slide">
                {
                  files.map((file, index) => (
                    <Slides
                      key={index}
                      imgURL={file}>
                    </Slides>
                  ))
                }
              </div>
              <div className="button-wrapper">
                <button className="prev" onClick={handlePrev}><i className="fa-solid fa-arrow-left"></i></button>
                <button className="next" onClick={handleNext}><i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>

        <div id="details-container">
          <div id="details-content">
            <div id="details-title">
              <h1>APPARTAMENTO DI CAMPAGNA</h1>
            </div>
            <div id="details-description">
              <h3>Appartamento ad Arco, a due passi da Riva del Garda: la base ideale per esplorare il territorio. Perfetto
                per chi ama la natura, con facile accesso a trasporti, musei e attività all’aperto.
              </h3>
            </div>

            <section className="articles">
              <article>
                <div className="article-wrapper">
                  <figure>
                    <img
                      src="https://eh9yb2jeac9.exactdn.com/wp-content/uploads/2020/02/12-via-ferrata-monte-colodri-360gardalife-1200x800.jpg?strip=all&lossy=1&ssl=1"
                      alt="" />
                  </figure>
                  <div className="article-body">
                    <h2>Panorama</h2>
                    <p>
                      Rilassati con una vista mozzafiato sulle montagne! Un panorama che ti lascerà senza fiato, perfetto
                      per i tuoi momenti di relax
                    </p>
                  </div>
                </div>
              </article>
              <article>
                <div className="article-wrapper">
                  <figure>
                    <img src="https://www.stile.it/wp-content/uploads/2017/12/iStock-635920906-1024x683.jpg" alt="" />
                  </figure>
                  <div className="article-body">
                    <h2>Cucina moderna</h2>
                    <p>
                      Per gli amanti della cucina autentica! Prepara deliziosi piatti nella nostra cucina, con tutti i
                      comfort di casa tua!
                    </p>
                  </div>
                </div>
              </article>
              <article>
                <div className="article-wrapper">
                  <figure>
                    <img
                      src="https://lamadonnina.grupposandonato.it/mediaObject/ospedali/news/la-madonnina-foto-news/aria-condizionata-salute/original/aria-condizionata-salute.jpg"
                      alt="" />
                  </figure>
                  <div className="article-body">
                    <h2>Aria Condizionata</h2>
                    <p>
                      Comfort in ogni stagione! Goditi una temperatura perfetta grazie alla nostra aria condizionata.
                    </p>
                  </div>
                </div>
              </article>
              <article>
                <div className="article-wrapper">
                  <figure>
                    <img
                      src="https://www.businesstechweekly.com/wp-content/uploads/2023/06/Can-You-Have-WiFi-without-Internet.jpg"
                      alt="" />
                  </figure>
                  <div className="article-body">
                    <h2>Connessione Wi-Fi</h2>
                    <p>
                      Rimani connesso ovunque! Naviga, lavora o guarda i tuoi contenuti preferiti con il nostro WiFi ad alta
                      velocità
                    </p>
                  </div>
                </div>
              </article>
              <article>
                <div className="article-wrapper">
                  <figure>
                    <img src="https://www.ildenaro.it/wp-content/uploads/2025/03/intrattenimento.webp" alt="" />
                  </figure>
                  <div className="article-body">
                    <h2>Smart Tv</h2>
                    <p>
                      Intrattenimento senza limiti! Accedi a Netflix, YouTube e molto altro sulla nostra Smart TV per non
                      perderti mai i tuoi show preferiti.
                    </p>
                  </div>
                </div>
              </article>
            </section>
          </div>
          <div id="rivaOpportunities">
            <div id="details-content">
              <div id="details-title">
                <h1>RIVA DEL GARDA</h1>
              </div>
              <div id="cards-description">
                <div id="details-description">
                  <h3>Riva del Garda offre infinite possibilità per tutti i gusti: dagli sport acquatici alle escursioni in
                    montagna, dalla cultura locale alla gastronomia tipica.
                  </h3>
                </div>
                <section className="servizi">
                  <article>
                    <div className="article-wrapper">
                      <figure>
                        <img src="https://www.garda-outdoors.com/wp-content/uploads/2021/02/copertinakite-768x511.jpg"
                          alt="" />
                      </figure>
                      <div className="article-body">
                        <h2>Sport acquatici</h2>
                        <p>
                          Il Lago di Garda è famoso in tutto il mondo per il windsurf e la vela. Approfitta dei venti
                          costanti per vivere emozioni uniche sull'acqua cristallina del lago.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article>
                    <div className="article-wrapper">
                      <figure>
                        <img
                          src="https://www.residencecentrovela.com/wp/wp-content/uploads/2021/12/Busatte_tempesta_ResidenceCentroVela_INUP_Tourism-1024x768.jpg"
                          alt="" />
                      </figure>
                      <div className="article-body">
                        <h2>Escursioni e Trekking</h2>
                        <p>
                          Scopri i sentieri che circondano Riva del Garda, dal facile Monte Brione alle impegnative vie
                          ferrate delle Dolomiti di Brenta, con panorami mozzafiato.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article>
                    <div className="article-wrapper">
                      <figure>
                        <img
                          src="https://www.arcomountainguide.com/wp-content/uploads/2018/03/05_arrampicata-climbing-arco-lake-garda.jpg"
                          alt="" />
                      </figure>
                      <div className="article-body">
                        <h2>Arrampicata</h2>
                        <p>
                          Per gli amanti dell'arrampicata, Arco è nota in tutto il mondo come uno dei paradisi
                          dell'arrampicata con scalate per tutti i livelli di difficoltà.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article>
                    <div className="article-wrapper">
                      <figure>
                        <img
                          src="https://www.dolomiti.it/storage/localities/22364/conversions/castello_di_arco_dreamstime_xbrchx-tablet.jpg"
                          alt="" />
                      </figure>
                      <div className="article-body">
                        <h2>Cultura e storia</h2>
                        <p>
                          Visita musei, castelli e siti storici che raccontano la ricca storia di questa affascinante
                          regione.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article>
                    <div className="article-wrapper">
                      <figure>
                        <img
                          src="https://www.garda-outdoors.com/wp-content/uploads/2022/05/C597BE64-DB61-420E-B1EE-40DBB6BC7D6E.jpg"
                          alt="" />
                      </figure>
                      <div className="article-body">
                        <h2>Locali sul lungo lago</h2>
                        <p>
                          Per gli amanti degli aperitivi e tramonti, Riva del Garda offre una scelta di locali sul lungo
                          lago vasta ed eccellente.
                        </p>
                      </div>
                    </div>
                  </article>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div>
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
            <img alt="Creative Commons-lisens"
              style={{ borderWidth: "0" }} src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
          </a>
          <br />Dette verk er lisensieret under en
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
            Creative Commons Navngivelse 4.0 Internasjonal lisens
          </a>
        </div>
      </footer>
      <button id="scroll-top" aria-label="Scroll to top">
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  )
}

export default App
