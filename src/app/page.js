import Navbar from "./components/navbar";
import HeroBanner from "./components/herobanner";
import Explore from "./components/explore";
import Choosen from "./components/choosen";
import Review from "./components/review";
import Footer from "./components/footer";

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
