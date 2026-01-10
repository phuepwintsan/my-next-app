import Navbar from "./components/NavBar";
import HeroBanner from "./components/HeroBanner";
import Explore from "./components/Explore";
import Choosen from "./components/Chosen";
import Review from "./components/Review";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
   <Navbar/>
   <HeroBanner/>
   <Explore/>
   <Choosen />
   <Review />
   <Footer />
    </>
  );
}
