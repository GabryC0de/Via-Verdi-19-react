import Header from "../home/home_components/header.jsx";
import Section from "./gallery_components/sections.jsx";
import Footer from '../home/home_components/footer.jsx';
import ToTopBtn from '../home/home_components/toTopBtn.jsx';

import './galleria.css'

function Gallery() {
    return (
        <>
            <Header></Header>
            <div id="gallery-wrapper">
                <Section title={"Soggiorno"} ID={"a"}></Section>
                <Section title={"Cucina"} ID={"b"}></Section>
                <Section title={"Camere"} ID={"c"}></Section>
                <Section title={"Bagni"} ID={"d"}></Section>
                <Section title={"Esterni"} ID={"e"}></Section>
                <Section title={"Paesaggio"} ID={"f"}></Section>
            </div>
            <Footer
                email={"info@viaverdi19.it"}
                telefono={"3334307205"}>
            </Footer>
            <ToTopBtn></ToTopBtn>
        </>
    )
}

export default Gallery;