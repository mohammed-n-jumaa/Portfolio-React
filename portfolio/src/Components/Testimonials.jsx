import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>Testimonials</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="testimonial-slider"
      >
        <SwiperSlide>
          <div className="testimonial-card">
            <img src="./portfolio/aza.jpg" alt="Client 1" />
            <p>"Mohammed transformed our website! His attention to detail is incredible."</p>
            <h4>Ahmad Azam</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <img src="./portfolio/sami.jpg" alt="Client 2" />
            <p>"The mobile app he built exceeded our expectations. Highly recommend!"</p>
            <h4>Sami Yaseen</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <img src="./portfolio/omar.jpg" alt="Client 3" />
            <p>"Great design and usability. Our users love the new interface!"</p>
            <h4>Omar Safi</h4>
          </div>
        </SwiperSlide>
        {/* 3 تقييمات إضافية */}
        <SwiperSlide>
          <div className="testimonial-card">
            <img src="./portfolio/client4.jpg" alt="Client 4" />
            <p>"Amazing service, quick turnaround, and excellent communication."</p>
            <h4>Layla Nabil</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <img src="./portfolio/client5.jpg" alt="Client 5" />
            <p>"Highly professional and efficient, really happy with the results."</p>
            <h4>Ali Hassan</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <img src="./portfolio/client6.jpg" alt="Client 6" />
            <p>"The best developer I’ve worked with. Delivered above expectations."</p>
            <h4>Sarah Abdulrahman</h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
