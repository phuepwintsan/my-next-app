import NavBar from "./components/navBar";
import HeroBanner from "./components/heroBanner";
import Explore from "./components/explore";
import Chosen from "./components/chosen";
import Review from "./components/review";
import Footer from "./components/footer";

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
