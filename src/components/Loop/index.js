import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const Loop = ({ reverse }) => {
  const logos = [
    { src: "/logos/1.png", alt: "1" },
    { src: "/logos/2...png", alt: "2" },
    { src: "/logos/3..png", alt: "3" },
    { src: "/logos/4.png", alt: "4" },
    { src: "/logos/5.png", alt: "5" },
    { src: "/logos/1..png", alt: "6" },
    { src: "/logos/7.png", alt: "7" },

   
  ];

  return (
    <div className={`${styles.loopSection} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.marquee}>
        {logos.map((logo, index) => (
          <div className={styles.logoWrapper} key={index}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={250}
              height={120}
              className={styles.logo}
            />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div className={styles.logoWrapper} key={`loop-${index}`}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={250}
              height={120}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loop;