import "./SignIn.css";
import { useState } from "react";
import axios from "axios";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userMessage, setUserMessage] = useState("");

  return (
    <section id="signin">
      <img
        src="https://cdn-icons-png.flaticon.com/128/9128/9128900.png"
        id="loginLogo"
      />
      <div className="container">
        <h1 id="signinHeading">Login</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            axios
              .post("https://capstone-project-ezs6.onrender.com/login", {
                username: username,
                password: password,
              })
              .then((res) =>
                res.data.success === true
                  ? (window.location.href = "/mainpage")
                  : setUserMessage(res.data.message)
              );
          }}
          id="loginForm"
        >
          <input
            type="username"
            placeholder="name"
            id="signinEmail"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <br />
          <input
            type="password"
            placeholder="Password"
            id="signinpassword"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />

          <input type="submit" value="Log In" id="signinBtn" />
          <p id="signInMessage">{userMessage}</p>
        </form>
      </div>
    </section>
  );
}

export default SignIn;
