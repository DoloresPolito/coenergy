import React from "react";
// import up from "../../../public/assets/up.png";
// import down from "../../../public/assets/down.png";
import styles from "./style.module.scss"

export const AccordionItem = ({
  handleToggle,
  active,
  header,
  id,
  content,
}) => {
  return (
    <div className={styles.card} >
      <div 
      onClick={() => handleToggle(id)} 
      className={styles.header}>
        <h6>{id}</h6>
       <h4> {header}</h4>

        {/* <img src={active === id ? up : down} alt="+" /> */}
        <span>{active === id ? "▲" : "▼"}</span>
      </div>
      <div className={`${styles.content} ${active === id ? styles.show : ""}`}><p>{content}</p></div>
    </div>
  );
};



export default AccordionItem;