import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import FindInsurance from "./pages/FindInsurance";
import Learn from "./pages/Learn";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-insurance" element={<FindInsurance />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
