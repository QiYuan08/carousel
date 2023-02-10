import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css"; // Import Swiper styles
import Card from "./Card";
import { Pagination } from "swiper";
import { Navigation } from "swiper";

const Carousel = ({ datas }) => {
  return (
    <div className="carousel-contaier">
      <Swiper
        modules={[Pagination, Navigation]}
        centeredSlides={false}
        centerInsufficientSlides={true}
        pagination={true}
        navigation={true}
        spaceBetween={4}
        breakpoints={{
          // when window width is >= 1200px
          900: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        <div>
          {datas.map((data, idx) => {
            return (
              <SwiperSlide key={idx}>
                <Card img={data} header={`Article ${idx + 1}`} />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
