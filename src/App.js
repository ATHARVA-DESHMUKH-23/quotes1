import React, { useEffect } from "react";
import img1 from './img1.webp';
import img2 from './img2.jpg'
import img3 from './img3.jpg'

import "./App.css";

// Importing Google Fonts
const loadGoogleFonts = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

const App = () => {
  useEffect(() => {
    loadGoogleFonts(); // Load fonts

    // Slide-in and fade-in animation for tabs and quote content
    const timeoutId = setTimeout(() => {
      document.querySelectorAll(".tab").forEach((tab, index) => {
        tab.style.animation = `slideIn 1s forwards ${index * 0.5}s`;
      });
      document.querySelector(".quote-content").style.opacity = 1;
    }, 100);

    return () => clearTimeout(timeoutId); // Cleanup timeout
  }, []);

  return (
    <div className="outer">
      <div className="tab"><img src={img1} alt="Image 1" /></div>
      <div className="tab"><img src={img2} alt="Image 2" /></div>
      <div className="tab"><img src={img3} alt="Image 3" /></div>
      <div className="quote">
        <div className="quote-content">
          <h1>
            Capitalism is the only way … It makes{" "}
            <span className="am" style={{ color: "rgb(255, 0, 0)" }}>America</span>{" "}
            great, <span className="am" style={{ color: "rgb(0, 145, 255)" }}>England</span>{" "}
            OK and <span className="am" style={{ color: "rgb(255, 238, 0)" }}>France</span> terrible.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default App;
