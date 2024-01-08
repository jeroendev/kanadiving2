import "./home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="home__section">
        <div className="home__banner">
          <h1 className="home__title">KanaDiving</h1>
          <h2 className="home__subtitle">Duikclub & Opleidingen</h2>
          <h5>PADI 5* IDC Center</h5>
        </div>
      </div>
      <div className="home__secondary">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <video className="background__video" autoPlay loop muted>
              <source src="../img/KanaDivingVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className=" col-lg-6 text-container">
            <h1>Laat ons je duikervaring onvergetelijk maken!</h1>
            <p>
              Ontdek de betoverende schoonheid van de onderwaterwereld en laat
              je meeslepen door de fascinerende wereld van duiken. Duik in een
              onvergetelijke ervaring en laat ons je begeleiden op een reis vol
              opwinding en ontdekkingen. Klaar om je grenzen te verleggen en je
              passie voor duiken tot leven te brengen? Leer duiken bij ons en
              maak je klaar voor een diepzeereis die je nooit zult vergeten!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
