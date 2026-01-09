import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Sections/HeroSection";
import FloatingInput from "./Sections/FloatingInput";
import Statistics from "./Sections/Statistics";
import BoostSection from "./Sections/BoostSection";
import Footer from "./Components/Footer";

import { useState, useEffect } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const savedLinks = localStorage.getItem("shortenedLinks");
    if (savedLinks) {
      setLinks(JSON.parse(savedLinks));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("shortenedLinks", JSON.stringify(links));
  }, [links]);

  const handleShorten = async () => {
    if (!url) return alert("Please add a link");

    try {
      const response = await fetch(
        `https://is.gd/create.php?format=json&url=${encodeURIComponent(url)}`
      );
      const data = await response.json();

      setLinks((prev) => [...prev, { original: url, short: data.shorturl }]);
      setUrl("");
    } catch (error) {
      console.error("API error:", error);
    }
  };

  const handleCopy = (shortLink, index) => {
    navigator.clipboard.writeText(shortLink).then(() => {
      const newLinks = [...links];
      newLinks[index].copied = true;
      setLinks(newLinks);

      setTimeout(() => {
        const resetLinks = [...newLinks];
        resetLinks[index].copied = false;
        setLinks(resetLinks);
      }, 2000);
    });
  };

  return (
    <div className="App">
      <Navbar />

      {/* Hero + floating input */}
      <div className="relative">
        <HeroSection />

        {/* Floating input on divider */}
        <div className="absolute left-0 right-0 -bottom-20 z-20">
          <FloatingInput
            url={url}
            setUrl={setUrl}
            handleShorten={handleShorten}
          />
        </div>
      </div>

      {/* Statistics section contains results */}
      <Statistics links={links} handleCopy={handleCopy} />

      <BoostSection />
      <Footer />
    </div>
  );
}

export default App;
