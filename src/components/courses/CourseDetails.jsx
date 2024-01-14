import React from "react";

export const discoverScubaDivingData = {
  title: "Discover Scuba Diving",
  subtitle: "Ontdek de onderwaterwereld",
  text1:
    "Een introductieduik is een eerste kennismaking met duiken. Onder professionele begeleiding, en in kleine groepen, ervaar je het ademen en zweven onderwater. De introductieduik duurt 1 avond. Ben je nieuwsgierig? Heb je het altijd al willen doen? Of wil je gewoon voor vrienden of collega’s een leuke dag of avond organiseren? Dan is een introductieduik een perfecte match!",
  text2:
    "Voorafgaand aan de duik word je ontvangen in ons lokaal voor een korte theorieles/briefing. Samen passen we de verschillende duikmaterialen die je nodig hebt en daarna gaan we naar het zwembad. We spenderen ongeveer 30 minuten onder water, waardoor je een goede indruk krijgt van het duiken. Na afloop hebben we een nabespreking waarin we graag horen wat je er van vond.",
  additionalInfo: [
    "Minimale leeftijd 10 jaar",
    "Neem je eigen badkleding mee",
    "Wij zorgen voor alle andere materialen",
    "De cursus duurt 1 avond",
    "Handsignalen en basisvaardigheden worden aangeleerd",
    "Leer via je computer of mobile wat de veiligheidsbeginselen van het duiken zijn voor je in het water duikt. De e-learning duurt 20 a 30 minuten.",
  ],
  imageSrc: "../img/padi-discover.jpg",
};

export const openWaterDiverData = {
  title: "Open Water Diver",
  subtitle: "Je eerste brevet",
  text1:
    "Jouw eerste duikbrevet opent de deur naar een leven vol avonturen. Na het behalen van deze cursus bij KANA DIVING kun je overal ter wereld duiken. Onder begeleiding van onze professionele stafleden leer je de basis van het duiken met perslucht. Onze cursussen worden gegeven in een rustig tempo met veel aandacht voor persoonlijke begeleiding. Kleine groepen en voldoende stafleden zorgen er voor dat iedereen de aandacht krijgt die hij/zij nodig heeft. Zelfs 1 op 1 indien dit nodig zou zijn om bepaalde vaardigheden onder de knie te krijgen.",
  text2:
    "Kwaliteit van de duikopleiding staat voor ons centraal, op die manier kan je ook tijdens de duikles al genieten van het rust en vrede onder water. Met dit brevet mag je met je buddy tot een max. diepte van 18m gaan. Duikers in de leeftijd van 10-14 jaar behalen het Junior Diver-brevet. Junior Open Water-duikers worden wanneer ze 15 jaar zijn automatisch Open Water-duikers. Op elke vervangende brevetpas of eCard die na het bereiken van de 15 jarige leeftijd wordt aangeschaft, staat automatisch Open Water-duiker ( niet Junior Open Water-duiker). Wanneer je klaar bent met je Open Water brevet, mag je overal ter wereld duiken tot 18 meter in omstandigheden die gelijkwaardig of beter zijn dan je lesomstandigheden. Maar je bent nog niet klaar met “duiker worden”. Voor veel duiken is namelijk aanvullende training nodig. ",
  additionalInfo: [
    "Minimale leeftijd 10 jaar",
    "Inclusief gebruik van duikmaterialen (we raden wel aan om zelf een masker en snorkel aan te schaffen, wij verkopen een basispakket)",
    "Inclusief verzekering tijdens de opleiding",
    "Inclusief PADI e-learning theoriepakket en logboek",
    "Exclusief inkomprijs buitenwaterduiken en indoorduiken (Todi, Nemo … de inkom voor de instructeur wordt gedeeld onder de cursisten)",
    "Exclusief eventuele dagvergunningen (put van Ekeren)",
  ],
  imageSrc: "../img/Basisopleidingen-OWD.jpg",
};

const CourseDetails = ({
  title,
  subtitle,
  text1,
  text2,
  additionalInfo,
  imageSrc,
}) => {
  return (
    <div className="container" id="discover">
      <div className=" text-center pt-4 pb-4">
        <h1>{title}</h1>
        <h5>{subtitle}</h5>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6 text-container justify-content-center align-items-center course__text">
          <p className=" text-secondary">{text1}</p>
          <br />
          <p className=" text-secondary">{text2}</p>
          <br />
        </div>
        <div className="col-lg-6 ">
          <img
            src={imageSrc}
            alt=""
            className=" img-fluid course__img mb-lg-2"
          />
        </div>
      </div>
      <div className=" text-start">
        <h5>Aanvullende informatie</h5>
        <ul className=" text-secondary">
          {additionalInfo.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
      </div>
      <button className=" btn btn-danger mt-2 mb-5">Contacteer ons</button>
    </div>
  );
};

export default CourseDetails;