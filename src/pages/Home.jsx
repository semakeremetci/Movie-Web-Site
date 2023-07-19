import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import Slides from "../Components/Slides";
import Footer from "../Components/Footer";
import SideBar from "../Components/SideBar";
import { useRef } from "react";

function Home() {
  const heroSectionRef = useRef(null);
  const popularSlidesRef = useRef(null);
  const topRatedSlidesRef = useRef(null);
  const upComingSlidesRef = useRef(null);

  // Sayfada ikonlara tıklandığında belli bölgeye scroll etmesi için kullanılan fonksiyon.
  const scrollToSection = (section) => {
    switch (section) {
      case "heroSection":
        heroSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "popularSlides":
        popularSlidesRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "topRatedSlides":
        topRatedSlidesRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "upComingSlides":
        upComingSlidesRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
    //   console.log(scrollToSection);
  };

  return (
    <div>
      <Navbar></Navbar>
      <SideBar scrollToSection={scrollToSection}></SideBar>
      <HeroSection id="heroSection" ref={heroSectionRef}></HeroSection>
      <Slides h1={"Popular"} ref={popularSlidesRef}></Slides>
      <Slides h1={"Top Rated"} ref={topRatedSlidesRef}></Slides>
      <Slides h1={"Up Coming"} ref={upComingSlidesRef}></Slides>
      <Footer></Footer>
    </div>
  );
}

export default Home;
