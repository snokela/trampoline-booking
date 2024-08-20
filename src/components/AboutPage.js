import React from "react";
import ImageCarousel from "./ImageCarousel";

const AboutPage = () => {
  return (
    <div className="container justify-content-center pb-3">
      <h5 className="fw-bolder mt-4">Pomppuvuoro</h5>
      <h6 className="fw-lighter fst-italic pb-4">- Helppo tapa varata trampoliinivuoro! -</h6>
      <ImageCarousel />
        <p className="w-75 mx-auto mt-4">PomppuVuoro on sovellus, jonka avulla voit helposti varata trampoliinivuoron itsellesi.
          Tällä hetkellä pomppuvuoron voi valita vain valmiiksi listaan tallenetut käyttäjä: Inkku ja
          Marsu.Sovellus on suunniteltu tekemään varaaminen nopeaksi ja vaivattomaksi, jotta voit
          keskittyä olennaiseen – hauskanpitoon trampoliinilla!
        </p>
        <p className="w-75 mx-auto">
          Vaikka aikaisempia varauksia ei näy suoraan, PomppuVuoro pitää kirjaa pomppuhistoriastasi.
          Voit tarkistaa milloin olet pomppinut ja kuinka pitkään, mikä auttaa seuraamaan omaa
          edistymistäsi tai vain muistamaan hauskat hetket trampoliinilla.
        </p>
    </div>
  )
}

export default AboutPage;