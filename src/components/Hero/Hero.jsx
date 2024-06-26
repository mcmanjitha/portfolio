import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Manjitha</h1>
        <p className={styles.description}>
        I'm a final year undergraduate with a strong foundation in full-stack development. 
        Proficient in React.JS, Node.JS, and Springboot, 
        eager to leverage my skills to contribute to innovative projects in a 
        fast-paced IT environment. 
        </p>
        <a href="mailto:emmanjitha@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
