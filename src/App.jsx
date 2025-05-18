import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "../src/components/Hero.jsx";
import Footer from "../src/components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
