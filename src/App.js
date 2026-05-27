import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}