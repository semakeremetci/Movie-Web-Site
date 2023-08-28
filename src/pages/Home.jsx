import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import Slides from "../Components/Slides";
import Footer from "../Components/Footer";
import SideBar from "../Components/SideBar";
import InputField from "../Components/InputField";

function Home({
  movieData,
  popularData,
  upComingData,
  topRatedData,
  tvSeriesData,
}) {
  return (
    <div>
      <Navbar></Navbar>
      <SideBar></SideBar>
      <HeroSection movieData={movieData}></HeroSection>
      <InputField customClass="flex"></InputField>
      <Slides popularData={popularData} h1={"Popular"}></Slides>
      <Slides upComingData={upComingData} h1={"Up Coming"}></Slides>
      <Slides topRatedData={topRatedData} h1={"Top Rated"}></Slides>
      <Slides tvSeriesData={tvSeriesData} h1={"Tv Series"}></Slides>
      <Footer></Footer>
    </div>
  );
}

export default Home;
