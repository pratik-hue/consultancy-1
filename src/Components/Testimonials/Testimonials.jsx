import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback: "VisaPro Consultancy made my student visa process smooth and hassle-free. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    country: "USA",
    position: "Student",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    feedback: "I got my work visa approved within weeks! Thank you for your outstanding support. The service was excellent, and they guided me throughout the process!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    country: "Canada",
    position: "Software Engineer",
    rating: 4.5,
  },
  {
    id: 3,
    name: "David Lee",
    feedback: "Professional service! My tourist visa was processed quickly without any issues. Their team was incredibly helpful!",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    country: "Australia",
    position: "Traveler",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Smith",
    feedback: "I received my permanent residency without complications. Highly trustworthy! The whole experience was seamless and stress-free. Thank you for everything!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    country: "UK",
    position: "Business Owner",
    rating: 4.8,
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="flex justify-center mt-2">
      {[...Array(fullStars)].map((_, index) => (
        <span key={index} className="text-yellow-400 text-lg">★</span>
      ))}
      {halfStar && <span className="text-yellow-400 text-lg">☆</span>}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
          What Our Clients Say
        </h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="flex justify-center">
              <div className="bg-white rounded-2xl shadow-md p-6 max-w-sm w-full flex flex-col items-center 
                transition transform hover:scale-105 hover:shadow-lg h-[300px] md:h-[340px] lg:h-[360px] flex-grow">
                
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full border-4 border-blue-500 shadow-md"
                />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.position}, {testimonial.country}</p>
                <StarRating rating={testimonial.rating} />
                <p className="text-gray-700 mt-3 text-sm text-center italic flex-grow">
                  "{testimonial.feedback}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
