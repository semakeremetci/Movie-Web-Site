import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import Slides from "../Components/Slides";
import Footer from "../Components/Footer";
import SideBar from "../Components/SideBar";
import InputField from "../Components/InputField";
import { useEffect } from "react";

function Home({
  movieData,
  popularData,
  upComingData,
  topRatedData,
  tvSeriesData,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <SideBar></SideBar>
      <HeroSection movieData={movieData}></HeroSection>
      <InputField customClass="flex"></InputField>
      <Slides
        clickedMovie={null}
        popularData={popularData}
        h1={"Popular"}
      ></Slides>
      <Slides
        clickedMovie={null}
        upComingData={upComingData}
        h1={"Up Coming"}
      ></Slides>
      <Slides
        clickedMovie={null}
        topRatedData={topRatedData}
        h1={"Top Rated"}
      ></Slides>
      <Slides
        clickedMovie={null}
        tvSeriesData={tvSeriesData}
        h1={"Tv Series"}
      ></Slides>
      <Footer></Footer>
    </div>
  );
}

export default Home;
