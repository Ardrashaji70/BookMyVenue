import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/explore" element={<h1>Explore Page (coming soon!)</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<h1>Signup Page (coming soon!)</h1>} />
      </Routes>
    </BrowserRouter>
  );
}