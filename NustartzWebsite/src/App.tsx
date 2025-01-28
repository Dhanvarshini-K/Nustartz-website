import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { AboutUs } from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import { Review } from "./components/Reviews/Reviews";
import Services from "./components/Services/Services";
import Home from "./components/Home/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/review" element={<Review />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
