import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";

import cafe1 from "../Assets/cafe1.jpg.jpg";
import cafe2 from "../Assets/cafe2.jpg.jpg";
import cafe3 from "../Assets/cafe3.jpg.jpg";

const HomePage = () => {
  const images = [cafe1, cafe2, cafe3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <img
        src={images[index]}
        alt="Cafe"
        style={{ width: "100%", height: "400px", objectFit: "cover" }}
      />
    </div>
  );
};

export default HomePage;