import NavBar from "./components/NavBar";
import HeroBanner from "./components/Herobanner";
import Explore from "./components/Explore";
import Chosen from "./components/Chosen";
import Review from "./components/Reviews";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
   <NavBar/>
   <HeroBanner/>
   <Explore/>
   <Chosen />
   <Review />
   <Footer />
    </>
  );
}
