import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module

export const LatestProjects = () => {
  return (
    <>
      <h2 className="text-3xl mt-8 font-thin font-imfell mb-12 text-center">
        My Latest Projects
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500, // Set delay for autoplay
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]} // Add Autoplay module
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="slide-container">
            <a href="https://www.nationalgeographic.com/">
              <img src="assests/natgeo_4.KOWE7s8I.jpg" alt="Image1" />
            </a>
            <div className="overlay">Explore the world with Nat Geo.</div>
            <p className="text mt-3 mb-4 text-lg font-bold">Nat Geo</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img
              src="assests/miniature-cesarsociety.CPI5Bb3C.jpg"
              alt="Image2"
            />
            <div className="overlay">Join the Cesar Society community.</div>
            <p className="text mt-3 mb-4 text-lg font-bold">Cesar Society</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img
              src="assests/miniature-themandalorian.CUcv5SmN.jpg"
              alt="Image3"
            />
            <div className="overlay">
              Experience the adventures of The Mandalorian.
            </div>
            <p className="text mt-3 mb-4 text-lg font-bold">The Mandalorian</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src="assests/miniature-fitly.1XfRDU5K.jpg" alt="Image4" />
            <div className="overlay">Stay fit and healthy with Fitly.</div>
            <p className="text mt-3 mb-4 text-lg font-bold">Fitly</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <a href="https://www.adidas.co.in/">
              <img src="assests/miniature-adidas.BAdzdOaA.jpg" alt="Image5" />
            </a>
            <div className="overlay">Discover the latest from Adidas.</div>
            <p className="text mt-3 mb-4 text-lg font-bold">Adidas</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src="assests/miniature-cesar.DznDD4Xt.jpg" alt="Image5" />
            <div className="overlay">Explore the world of Cesar.</div>
            <p className="text mt-3 mb-4 text-lg font-bold">Cesar</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
