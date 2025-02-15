import Banner from "../../Components/Banner/Banner";
import DefaultLayout from "../../Components/DefaultLayout";
import Destinations from "../../Components/Destinations/Destinations";
import ServiceCards from "../../Components/ServiceCards/ServiceCards";

import Testimonials from "../../Components/Testimonials";
import Whychoose from "../../Components/Whychoose";

const Home = () => {
  return (
    <div>
      <DefaultLayout>
      <Banner/>
      <ServiceCards/>
      <Destinations/>
      <Whychoose/>
      <Testimonials/>
      
      </DefaultLayout>
    </div>
  );
};

export default Home;