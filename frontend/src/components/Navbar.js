import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <section id="navBar">
      <nav>
        <img
          src="https://cdn-icons-png.flaticon.com/128/9128/9128900.png"
          id="loginLogos"
        />
      </nav>
      <nav>
        <Link to={"/search"} className="linkHome">
          <img
            src="https://img.icons8.com/?size=512&id=132&format=png"
            id="searchIconImg"
          />
        </Link>
        <ul id="lists">
          <Link to={"/mainpage"} className="linkHome">
            <li className="items">
              <h6 className="navbarHeading">Home</h6>
            </li>{" "}
          </Link>

          <Link to={"/feedback"} className="linkHome">
            <li className="items">
              <h6 className="navbarHeading">Feedbacks</h6>
            </li>
          </Link>
        </ul>

        <div>
          <Link to={"/"}>
            <button id="logOutBtn">Log Out</button>
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
