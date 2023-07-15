import { useState } from "react";
import "./GetStarted.css";
import axios from "axios";

function GetStarted() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userMessage, setUserMessage] = useState("");

  return (
    <section id="getStarted">
      <img
        src="https://cdn-icons-png.flaticon.com/128/9128/9128900.png"
        id="loginLogo"
      />
      <div id="containerSignUp">
        <h1 id="signupHeading">Sign Up</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            axios
              .post("https://capstone-project-ezs6.onrender.com/register", {
                username: userName,
                email: email,
                password: password,
              })
              .then((res) =>
                res.data.success === true
                  ? (window.location.href = "/login")
                  : setUserMessage(res.data.message)
              );
          }}
        >
          <input
            type="text"
            placeholder="User Name"
            id="signinEmail"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            id="signinEmail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />{" "}
          <br />
          <input
            type="password"
            placeholder="Password"
            id="signinEmail"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <input type="submit" id="signinBtn" value="Signup" />
          <p id="signUpMessage">{userMessage}</p>
        </form>
      </div>
    </section>
  );
}

export default GetStarted;
