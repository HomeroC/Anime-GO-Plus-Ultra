import React, { useState, useEffect } from "react";
import "./Banner.css"; // Import CSS for styling

const Banner = () => {
  const [titles, setTitles] = useState([
    "Anime Title 1",
    "Anime Title 2",
    "Anime Title 3",
  ]);

  // Automatically scroll the banner
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitles((prevTitles) => {
        const updatedTitles = [...prevTitles];
        updatedTitles.push(updatedTitles.shift());
        return updatedTitles;
      });
    }, 5000); // Adjust scroll speed (in milliseconds) as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="banner">
      <ul className="banner-list">
        {titles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Banner;
