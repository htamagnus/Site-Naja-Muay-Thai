import React from "react";
import BannerNaja from "../../assets/BannerNaja.png";
import styles from "./Banner.module.scss"

export default function Banner() {
  return (
    <>
      <div className={styles.banner} 
      style={{ backgroundImage: `url(${BannerNaja})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: 320,
                    width: "100%", }}
                    ></div>
    </>
  );
}
