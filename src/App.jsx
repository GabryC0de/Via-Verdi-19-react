import { useState, useEffect } from 'react'
import './app.css'
import FadingWindow from './home/home_components/fadingWindow.jsx'
import Header from './home/home_components/header.jsx'
import Slides from './home/home_components/slides.jsx'
import ToTopBtn from './home/home_components/toTopBtn.jsx'
import DynamicCard from './home/home_components/dynamicCards.jsx'
import Footer from './home/home_components/footer.jsx'

function App() {

  const [files, setFiles] = useState([]);
  // const [files, setFiles] = useState({ img: "", ID: 0 });
  useEffect(() => {
    fetch("http://localhost:3000/get-filenames")
      .then((res) => res.json())
      .then((data) => {
        setFiles(data.files)
        // data.forEach((file, index) => {
        //   setFiles(prevFiles => [...prevFiles, { img: file, ID: index }]);
        // })
        console.log("Files fetched");
        // setFiles(data.files);
      })
      .catch((error) => {
        console.error("Errore durante la fetch:", error);
      });
  }, []);

  useEffect(() => {
    const container = document.querySelectorAll(".wheel");
    const content = document.querySelectorAll(".articles");

    // Duplichiamo il contenuto per creare effetto infinito
    content.forEach(item => {
      item.innerHTML += item.innerHTML; // Duplica il contenuto
    });

    let scrollPos = 0;

    function scroll() {
      scrollPos += 1; // velocità dello scroll

      if (scrollPos >= content[0].scrollWidth / 2) {
        scrollPos = 0; // reset senza scatto perché abbiamo duplicato il contenuto
      }
      // Scorri il contenitore
      container.forEach((el) => {
        el.scrollLeft = scrollPos;
      });
      requestAnimationFrame(scroll); // loop fluido
    }

    scroll(); // avvia animazione
  });

  // function reducer(state, action) {
  //   switch (action.type) {
  //     case 'INCREASE':
  //       return (state.count >= files.length) ? { count: 0 } : { count: state.count + 1 }
  //     case 'DECREASE':
  //       return (state.count <= 0) ? { count: files.length - 1 } : { count: state.count - 1 }
  //     default:
  //       return { count: state.count };
  //   }
  // }

  // const [click, dispatchClick] = useReducer(reducer, { count: 0 });

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
                {/* {
                  files.map((file, index) => (
                    (index <= click.count + 4) ? <Slides
                      key={index}
                      imgURL={file}></Slides> : ""
                  ))
                } */}
              </div>
              <div className="button-wrapper">

                {/* <button className="prev" onClick={() => dispatchClick({ type: 'DECREASE' }) */}
                <button className="prev" onClick={() => {

                  let items = document.querySelectorAll(".item");
                  document.querySelector(".slide").prepend(items[items.length - 1]);

                }} > <i className="fa-solid fa-arrow-left"></i></button>

                {/* <button className="next" onClick={() => dispatchClick({ type: 'INCREASE' }) */}
                <button className="next" onClick={() => {

                  let items = document.querySelectorAll(".item");
                  document.querySelector(".slide").appendChild(items[0]);

                }}><i className="fa-solid fa-arrow-right"></i></button>

              </div>
            </div>
          </div>
        </div>
        <div className="details-container">
          <div className="sections">
            <div className="details-content">
              <div className="details-title">
                <h1>APPARTAMENTO IMMERSO NEL VERDE</h1>
              </div>
              <div id="wheel-1">
                <div id="details-description-1">
                  <h3>Appartamento ad Arco, a due passi da Riva del Garda: la base ideale per esplorare il territorio.
                    Perfetto per chi ama la natura, con facile accesso a trasporti, musei e attività all’aperto.
                  </h3>
                </div>
                <div className="wheel">
                  <section className="articles">
                    <DynamicCard imgURL={"https://eh9yb2jeac9.exactdn.com/wp-content/uploads/2020/02/12-via-ferrata-monte-colodri-360gardalife-1200x800.jpg?strip=all&lossy=1&ssl=1"}
                      title={"Panorama"}
                      description={"Rilassati con una vista mozzafiato sulle montagne! Un panorama che ti lascerà senza fiato, perfetto per i tuoi momenti di relax"}></DynamicCard>
                    <DynamicCard imgURL={"https://www.stile.it/wp-content/uploads/2017/12/iStock-635920906-1024x683.jpg"}
                      title={"Cucina moderna"}
                      description={"Per gli amanti della cucina autentica! Prepara deliziosi piatti nella nostra cucina, con tutti i comfort di casa tua!"}></DynamicCard>
                    <DynamicCard imgURL={"https://lamadonnina.grupposandonato.it/mediaObject/ospedali/news/la-madonnina-foto-news/aria-condizionata-salute/original/aria-condizionata-salute.jpg"}
                      title={"Aria Condizionata"}
                      description={"Comfort in ogni stagione! Goditi una temperatura perfetta grazie alla nostra aria condizionata."}></DynamicCard>
                    <DynamicCard imgURL={"https://www.businesstechweekly.com/wp-content/uploads/2023/06/Can-You-Have-WiFi-without-Internet.jpg"}
                      title={"Connessione Wi-Fi"}
                      description={"Rimani connesso ovunque! Naviga, lavora o guarda i tuoi contenuti preferiti con il nostro WiFi ad alta velocità"}></DynamicCard>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="sections">
            <div className="details-content">
              <div className="details-title">
                <h1>RIVA DEL GARDA</h1>
              </div>
              <div id="wheel-2">
                <div id="details-description-2">
                  <h3>Riva del Garda offre infinite possibilità per tutti i gusti: dagli sport acquatici alle escursioni in
                    montagna, dalla cultura locale alla gastronomia tipica.
                  </h3>
                </div>
                <div className="wheel">
                  <section className="articles">
                    <DynamicCard imgURL={"https://www.garda-outdoors.com/wp-content/uploads/2021/02/copertinakite-768x511.jpg"}
                      title={"Sport acquatici"}
                      description={"Il Lago di Garda è famoso in tutto il mondo per il windsurf e la vela. Approfitta dei venti costanti per vivere emozioni uniche sull'acqua cristallina del lago."}></DynamicCard>
                    <DynamicCard imgURL={"https://www.residencecentrovela.com/wp/wp-content/uploads/2021/12/Busatte_tempesta_ResidenceCentroVela_INUP_Tourism-1024x768.jpg"}
                      title={"Escursioni e Trekking"}
                      description={"Scopri i sentieri che circondano Riva del Garda, dal facile Monte Brione alle impegnative vie ferrate delle Dolomiti di Brenta, con panorami mozzafiato."}></DynamicCard>
                    <DynamicCard imgURL={"https://www.arcomountainguide.com/wp-content/uploads/2018/03/05_arrampicata-climbing-arco-lake-garda.jpg"}
                      title={"Arrampicata"}
                      description={"Per gli amanti dell'arrampicata, Arco è nota in tutto il mondo come uno dei paradisi dell'arrampicata con scalate per tutti i livelli di difficoltà."}></DynamicCard>
                    <DynamicCard imgURL={"https://www.dolomiti.it/storage/localities/22364/conversions/castello_di_arco_dreamstime_xbrchx-tablet.jpg"}
                      title={"Cultura e storia"}
                      description={"Visita musei, castelli e siti storici che raccontano la ricca storia di questa affascinante regione."}></DynamicCard>
                    <DynamicCard imgURL={"https://www.garda-outdoors.com/wp-content/uploads/2022/05/C597BE64-DB61-420E-B1EE-40DBB6BC7D6E.jpg"}
                      title={"Locali sul lungo lago"}
                      description={"Per gli amanti degli aperitivi e tramonti, Riva del Garda offre una scelta di locali sul lungo lago vasta ed eccellente."}></DynamicCard>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main >
      <Footer
        email={"info@viaverdi19.it"}
        telefono={"3334307205"}>
      </Footer>
      <ToTopBtn></ToTopBtn>
    </>
  )
}

export default App
