import LandingPage from "./components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import GetStarted from "./components/GetStarted";
import Header from "./components/Navbar";
import MovieDetails from "./components/MovieDetails";

import Search from "./components/Search";
import MainPage from "./components/MainPage";
import Feedback from "./components/Feedback";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<GetStarted />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/header" element={<Header />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
