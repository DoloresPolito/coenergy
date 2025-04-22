"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function Products() {
  const slides = [
    {
      title: "Inversor SMA",
      text: "descripcion 1",
      src: "2.png",
    },
    {
      title: "Inversor SMA",
      text: "descripcion 1",
      src: "2.png",
    },
    {
      title: "Inversor SMA",
      text: "descripcion 1",
      src: "2.png",
    },
    {
      title: "Inversor SMA",
      text: "descripcion 1",
      src: "2.png",
    },
    {
      title: "Inversor SMA",
      text: "descripcion 1",
      src: "2.png",
    },
    {
      title: "Inversor SMA",
      text: "descripcion 1",
      src: "2.png",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.carouselcontainer}>
          <div className={styles.carouselcontent}>
            <Swiper
              loop={true}
              speed={1000}
              parallax={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Parallax, Pagination, Navigation, Autoplay]}
              className={styles.mySwiper}
            >
              {slides.map((slide, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Slide slide={slide} />
                  </SwiperSlide>
                );
              })}
              {isMobile ? (
                <></>
              ) : (
                <>
                  <div
                    className="swiper-button-next"
                    style={{ color: "#F5F4F4" }}
                  ></div>
                  <div
                    className="swiper-button-prev"
                    style={{ color: "#F5F4F4" }}
                  ></div>
                </>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

const Slide = ({ slide }) => {
  return (
    <>
      <div
        className={styles.slide}
      >
        <div className={styles.textcontainer}>
          <div className={styles.inside}>
            <div className={styles.title} data-swiper-parallax="-300">
              {slide.title}
            </div>{" "}
            <div className={styles.text} data-swiper-parallax="-100">
              <p>{slide.text}</p>
            </div>
          </div>
        </div>

        <div className={styles.imagecontainer}>
          <Image
            src={`/images/${slide.src}`}
            alt="image"
            width={600}
            height={700}
          />
        </div>
      </div>
    </>
  );
};
