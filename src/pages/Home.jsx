import Hero from "../components/Hero";
import { WhoWeAre } from "../components/WhoWeAre";
import { Plan } from "../components/Plan"
import { Portfolio } from "../components/Portfolio";
import { WeddingVendors } from "../components/WeddingVendors";
import { Review } from "../components/Review";
import { Ideas } from "../components/Ideas";
import { Contact } from "../components/Contact";
const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Plan />
      <WhoWeAre />

      <Portfolio />
      <Review />
      <WeddingVendors />

      <Ideas />
      <Contact />
    </div>
  );
};
export default Home;
