import React from "react";
import BannerNaja2 from "../../assets/BannerNaja2.jpg";
import styles from "./Banner.module.scss"

export default function Banner() {
  return (
    <>
      <div className={styles.banner} 
      style={{ backgroundImage: `url(${BannerNaja2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: 400,
                    width: "100%", }}
                    ></div>
    </>
  );
}
