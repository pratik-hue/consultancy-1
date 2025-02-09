import Banner from "../../Components/Banner/Banner";
import Cards from "../../Components/Cards/Cards";
import DefaultLayout from "../../Components/DefaultLayout";
import Destinations from "../../Components/Destinations/Destinations";

import Services from "../../Components/Services/Services";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Whychoose from "../../Components/Whychoose";

const Home = () => {
  return (
    <div>
      <DefaultLayout>
      
      <Banner/>
      <Cards/>
      <Services/>
      <Destinations/>
      <Whychoose/>
      <Testimonials/>
      
      </DefaultLayout>
    </div>
  );
};

export default Home;