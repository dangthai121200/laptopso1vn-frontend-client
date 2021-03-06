import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../Card/Card";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { API_URL } from "../../redux/constants";

export default function SwiperLong({ title, listLap }) {
  AOS.init();
  const laps = listLap && listLap;
  const slideCount = laps && Math.round(laps.length / 9);
  const slides = [];
  for (let i = 0; i < slideCount; i++) {
    const items = laps.slice(0, 9);
    laps.splice(0, items.length);
    slides.push(items);
  }

  return (
    <section
      data-aos="fade-right"
      data-aos-duration="2000"
      data-aos-delay="200"
      className="showcase"
    >
      <div className="container">
        <h1 className="cateHeader text-center" id="categories__work">
          {title}
        </h1>
        <Swiper
          className="swiper--long"
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {slide.map((item) => (
                <Card
                  key={item.maSp}
                  img={`${API_URL}/${item.hinh}`}
                  name={item.tenSp}
                  cpu={item.cpu}
                  ram={item.ram}
                  vga={item.vga}
                  ocung={item.oCung}
                  manhinh={item.manHinh}
                  gia={item.gia}
                />
              ))}
            </SwiperSlide>
          ))}
          <a href="#" className="btnAll">
            Xem tất cả
          </a>
        </Swiper>
      </div>
    </section>
  );
}
