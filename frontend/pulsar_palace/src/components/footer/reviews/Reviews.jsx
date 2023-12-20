/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import ricardo from "../../../assets/ricardo.jpg";
import steve from "../../../assets/steve.webp";
import grandfather from "../../../assets/grandfather.jpg";
import jordan from "../../../assets/jordan.webp";
import leonardo from "../../../assets/leonardo.jpg";
import "../Footer.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Reviews = () => {
  return (
    <>
      <h1 className="testimonials">Testimonials</h1>
      <div className="reviews_container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="slide">
            <div className="comment_box">
              <div className="review_img_container">
                <img src={ricardo} alt="" className="review_img" />
              </div>
              <div className="quote">
                <span className="first">&#10077;</span>I had an incredible
                experience shopping at Pulsar Palace for my new mobile phone.
                The staff was knowledgeable and helped me find the perfect
                device that met all my requirements. The wide range of options
                and competitive prices made Pulsar Palace my go-to mobile store!
                <span className="second">&#10078;</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="comment_box">
              <div className="review_img_container">
                <img src={steve} alt="" className="review_img" />
              </div>
              <div className="quote">
                <span className="first">&#10077;</span>Pulsar Palace exceeded my
                expectations in every way possible. The store has a fantastic
                collection of the latest smartphones, and the customer service
                is top-notch. The staff was patient, guiding me through various
                options until I found the ideal phone. I highly recommend Pulsar
                Palace for anyone looking for a seamless mobile shopping
                experience.
                <span className="second">&#10078;</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="comment_box">
              <div className="review_img_container">
                <img src={grandfather} alt="" className="review_img" />
              </div>
              <div className="quote">
                <span className="first">&#10077;</span>Finding a reliable mobile
                store can be challenging, but Pulsar Palace made it easy. The
                store not only offers an extensive selection of smartphones but
                also provides excellent customer service. The friendly and
                helpful staff made my purchase stress-free. I'm extremely
                satisfied with my new phone and the overall shopping experience
                at Pulsar Palace.
                <span className="second">&#10078;</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="comment_box">
              <div className="review_img_container">
                <img src={jordan} alt="" className="review_img" />
              </div>
              <div className="quote">
                <span className="first">&#10077;</span>I recently purchased a
                mobile phone from Pulsar Palace, and I couldn't be happier with
                my choice. The store has a modern and inviting atmosphere,
                making the shopping process enjoyable. The staff was attentive
                and provided valuable insights, helping me make an informed
                decision. Pulsar Palace is now my preferred destination for all
                things mobile!
                <span className="second">&#10078;</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="comment_box">
              <div className="review_img_container">
                <img src={leonardo} alt="" className="review_img" />
              </div>
              <div className="quote">
                <span className="first">&#10077;</span>Pulsar Palace sets itself
                apart with its commitment to customer satisfaction. The store
                not only offers a diverse range of mobile devices but also
                ensures that customers have a positive shopping experience. The
                staff is friendly, the prices are competitive, and the
                after-sales support is excellent. I confidently recommend Pulsar
                Palace to anyone in need of a reliable and trustworthy mobile
                store.
                <span className="second">&#10078;</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Reviews;
