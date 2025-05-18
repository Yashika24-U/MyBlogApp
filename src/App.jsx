import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "../src/components/Hero.jsx";
import Footer from "../src/components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hero" element={<Hero />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
