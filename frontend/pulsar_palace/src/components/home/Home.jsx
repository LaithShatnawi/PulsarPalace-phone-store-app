import { useEffect } from "react";
import "./Home.scss";
import Hero from "./hero/Hero";
import ScrollSection from "./scroll section/ScrollSection";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="hero_to_scrollSection">
      <Hero />
      <ScrollSection />
    </div>
  );
};

export default Home;
