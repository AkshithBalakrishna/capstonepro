import "./LandingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <header id="landingHeader">
      <section id="landingNavbar">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/9128/9128900.png"
            id="landingLogos"
          />
        </div>
        <div>
          <Link to={"/login"}>
            <button id="singinBtn">Login</button>
          </Link>
        </div>
      </section>

      <section id="landingContent">
        <h1 id="contentHeadingOne">Enjoy endless entertainment with our</h1>
        <h1 id="contentHeadingOne">extensive collection of movies</h1>
        <h4 id="contentParaOne">
          Are you ready to dive into the world of entertainment?
        </h4>
        <p id="contentParaTwo">
          By clicking "Get Started," you can create a new account and embark on
          an unforgettable journey into the realm of reviews and
          recommendations.
        </p>
      </section>

      <sectiion id="landingLogin">
        <div id="landingBtnSec">
          <Link to={"/signup"}>
            <button id="landingBtn">Get Started</button>
          </Link>
        </div>
      </sectiion>
    </header>
  );
}

export default LandingPage;
