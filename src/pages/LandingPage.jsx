import { Navbar } from "@/components/navigation/Navbar";
import { Jombotron } from "@/components/section/Jombotron";
import { AboutUs } from "@/components/section/AboutUs";
import { Article } from "@/components/section/Article";
import { VideoSlide } from "@/components/section/VideoSlide";
import { Footer } from "@/components/section/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Jombotron />
      <AboutUs />
      <Article />
      <VideoSlide />
      <Footer />
    </>
  );
};

export default LandingPage;
