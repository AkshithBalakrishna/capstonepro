import { useState, useEffect } from "react";
import axios from "axios";
import "./Feedback.css";
import Navbar from "./Navbar";

function Feedback() {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    axios
      .get("https://capstone-project-ezs6.onrender.com/feedbackData")
      .then((res) => {
        setFeedbackData(res.data.reverse());
      });
  }, []);

  return (
    <header>
      <Navbar />
      <section id="feedbackSection">
        {feedbackData.map((feedback) => (
          <div id="feedbackDiv" key={feedback._id}>
            <img id="feedbackImg" src={feedback.movieImage} />
            <h1 id="feedbackTitle">{feedback.movieTitle}</h1>
            <h3 id="feedbackUserName">{feedback.userName}</h3>
            <p id="feedbackFeedback">{feedback.movieFeedback}</p>
          </div>
        ))}
      </section>
    </header>
  );
}

export default Feedback;
