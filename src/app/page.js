import NavBar from "./components/NavBars";
import HeroBanner from "./components/HeroBanners";
import Explore from "./components/Explore";
import Chosen from "./components/Chosen";
import Review from "./components/Reviews";
import Footer from "./components/Footers";

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
