import "./App.css";
import indiehackerslogo from "./assets/indiehackerslogo.png";
import gmail from "../public/gmail.png";
import youtube from "../public/youtube.png";
import medium from "../public/medium.png";

function App() {
  return (
    <>
      <section className="section-settings">
        <img
          src={indiehackerslogo}
          alt="Indie Hackers Brasil Logo"
          className="ih-logo"
        />
        <div className="social-card">
          <a href="https://medium.com/@indiehackersbrasil" target="_blank">
            <img src={medium} className="social-link" alt="Medium Logo" />
          </a>
          <a href="mailto:indiehackersbrasil@gmail.com" target="_blank">
            <img src={gmail} className="social-link" alt="Gmail Logo" />
          </a>
          <a href="https://www.youtube.com/@IndieHackersBrasil" target="_blank">
            <img src={youtube} className="social-link" alt="YouTube Logo" />
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
