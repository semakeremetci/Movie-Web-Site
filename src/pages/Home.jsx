import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import Slides from "../Components/Slides";
import Footer from "../Components/Footer";
import SideBar from "../Components/SideBar";
import { useRef, useState } from "react";
import InputField from "../Components/InputField";

function Home({
  movieData,
  popularData,
  upComingData,
  topRatedData,
  tvSeriesData,
}) {
  const [selectedMovie, setSelectedMovie] = useState([]);
  console.log(selectedMovie);
  const heroSectionRef = useRef(null);
  const popularSlidesRef = useRef(null);
  const topRatedSlidesRef = useRef(null);
  const upComingSlidesRef = useRef(null);
  const tvSeriesSlidesRef = useRef(null);

  // Sayfada ikonlara tıklandığında belli bölgeye scroll etmesi için kullanılan fonksiyon.
  const scrollToSection = (section) => {
    switch (section) {
      case "heroSection":
        heroSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "popularSlides":
        popularSlidesRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "upComingSlides":
        upComingSlidesRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "topRatedSlides":
        topRatedSlidesRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "tvSeriesSlides":
        tvSeriesSlidesRef.current.scrollIntoView({ behavior: "smooth" });
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
      <HeroSection ref={heroSectionRef} movieData={movieData}></HeroSection>
      <InputField
        onSubmitData={(data) => setSelectedMovie(data)}
        customClass="flex"
      ></InputField>
      <Slides
        ref={popularSlidesRef}
        popularData={popularData}
        h1={"Popular"}
      ></Slides>
      <Slides
        ref={upComingSlidesRef}
        upComingData={upComingData}
        h1={"Up Coming"}
      ></Slides>
      <Slides
        ref={topRatedSlidesRef}
        topRatedData={topRatedData}
        h1={"Top Rated"}
      ></Slides>
      <Slides
        ref={tvSeriesSlidesRef}
        tvSeriesData={tvSeriesData}
        h1={"Tv Series"}
      ></Slides>
      <Footer></Footer>
    </div>
  );
}

export default Home;
