"use client";
import React from "react";
import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import styles from "./styles.module.scss";
import RoundedButton from "@/components/RoundedButton";
import Image from "next/image";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { motion } from 'framer-motion';

export default function SwiperHero() {
  const [showSlider, setShowSlider] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShowSlider(window.innerWidth >= 800);
    }
  }, []);

  const slides = [
    {
      title: "INSTALACIONES EN INDUSTRIAS",
      text: "Energía solar para industrias que optimiza costos operativos, mejora la eficiencia energética y refuerza el compromiso ambiental de tu empresa con tecnología de alto rendimiento.",
      src: "morena2/1.jpeg",
    },
    {
      title: "INSTALACIONES EN HOGARES",
      text: "Soluciones solares para el hogar que reducen tu consumo eléctrico, cuidan el ambiente y aumentan el valor de tu propiedad, todo con una instalación eficiente.",
      src: "casa/5.jpeg",
    },
    {
      title: "INSTALACIONES EN EL CAMPO",
      text: "Soluciones de bombeo solar para el campo que garantizan autonomía, eficiencia y ahorro energético, ideales para riego, ganado y abastecimiento de agua en zonas rurales.",
      src: "campo/campo3.jpg",
    },
  ];

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 800) return;
    if (!slider.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start: 0,
          end: window.innerHeight,
          onUpdate: (e) => (direction = e.direction * -1),
        },
        x: "-500px",
      });

      const animate = () => {
        if (!firstText.current || !secondText.current) return;

        if (xPercent < -100) {
          xPercent = 0;
        } else if (xPercent > 0) {
          xPercent = -100;
        }

        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
        xPercent += 0.08 * direction;

        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    });

    return () => ctx.revert(); // Limpieza completa
  }, [showSlider]);

  return (
    <div className={styles.container}>
      <div className={styles.carouselcontainer}>
        {/* {showSlider && (
          <div className={styles.sliderContainer}>
            <div ref={slider} className={styles.slider}>
              <p ref={firstText}>La energía del futuro en tus manos hoy •</p>
              <p ref={secondText}> La energía del futuro en tus manos hoy • </p>
            </div>
          </div>
        )} */}

        <div className={styles.carouselcontent}>
          <Swiper
            loop={true}
            speed={1000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Parallax, Pagination, Navigation, Autoplay]}
            className={styles.mySwiper}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <Slide slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

const Slide = ({ slide }) => {
  return (
    <div className={styles.slide}>
      <div className={styles.videocontainer}>
        <Image
          src={`/imagenesnuevas/${slide.src}`}
          className={styles.video}
          width={1000}
          height={1000}
          alt="Instalaciones"
          priority
        />
      </div>

      <div className={styles.textcontainer}>
        <div className={styles.textcontent}>
          <p className={styles.text}>Soluciones Renovables</p>
          <h5>RESIDENCIAL / COMERCIAL / INDUSTRIAL / CAMPO</h5>
        </div>
        <RoundedButton
          text="Ver proyectos"
          color="#fdfdf1"
          background="transparent"
          border="#fdfdf1"
          hoverB="#f8fb9c"
          hoverC="#39442b"
          link="/proyectos"
        />
      </div>
    </div>
  );
};