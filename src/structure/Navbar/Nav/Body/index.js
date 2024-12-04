import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { blur, translate } from "../../anim";
import Link from "next/link";
import React from "react";


export default function Body({
  links,
  selectedLink,
  setSelectedLink,
  setIsActive,
}) {
  const getChars = (word) => {
    let chars = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  const handleLinkClick = () => {
    setIsActive(false);
  };

  return (
    <div className={styles.body}>
     
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <React.Fragment key={index}>
            <Link href={href} onClick={handleLinkClick} target={link.target}>
              <motion.p
                onMouseOver={() => {
                  setSelectedLink({ isActive: true, index });
                }}
                onMouseLeave={() => {
                  setSelectedLink({ isActive: false, index });
                }}
                variants={blur}
                animate={
                  selectedLink.isActive && selectedLink.index !== index
                    ? "open"
                    : "closed"
                }
              >
                {getChars(title)}
              </motion.p>
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
}
