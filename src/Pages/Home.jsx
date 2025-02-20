import Banner from "../Components/Banner";
import CounterSection from "../Components/ConterSection";
import DefaultLayout from "../Components/DefaultLayout";
import Destinations from "../Components/Destinations";
import ExamCards from "../Components/ExamCards";
import ServiceCards from "../Components/ServiceCards";

import Testimonials from "../Components/Testimonials";
import Whychoose from "../Components/Whychoose";

const Home = () => {
  return (
    <div>
      <DefaultLayout>
      <Banner/>
      <ServiceCards/>
      <Destinations/>
      <ExamCards/>

      <Whychoose/>
      <CounterSection/>
      <Testimonials/>
      
      </DefaultLayout>
    </div>
  );
};

export default Home;