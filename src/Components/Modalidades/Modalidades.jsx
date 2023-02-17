import React from "react";
import styles from "./Modalidades.module.scss";

import ModMuayThai from "../../assets/ModMuayThai.png";
import ModBoxe from "../../assets/ModBoxe.png";
import ModTaekwondo from "../../assets/ModTaekwondo.png";
import ModFuncional from "../../assets/ModFuncional.png";
import { Link } from "react-router-dom";

export default function Modalidades() {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        id="modalidades"
        className={styles.modalidades}
      >
        <div
          className={styles.imgmodalidades}
          style={{ backgroundImage: `url(${ModMuayThai})` }}
        >
          <h2 className={styles.imgmodalidades__texto}>Muay Thai</h2>
          <Link to="/muaythai">
            <button className={styles.imgmodalidades__botao}>
              Mais detalhes
            </button>
          </Link>
        </div>
        <div
          className={styles.imgmodalidades}
          style={{ backgroundImage: `url(${ModBoxe})` }}
        >
          <h2 className={styles.imgmodalidades__texto}>Boxe</h2>
          <Link to="/boxe">
            <button className={styles.imgmodalidades__botao}>
              Mais detalhes
            </button>
          </Link>
        </div>

        <div
          className={styles.imgmodalidades}
          style={{
            backgroundImage: `url(${ModTaekwondo})`,
            backgroundPosition: "center",
          }}
        >
          <h2 className={styles.imgmodalidades__texto}>Taekwondo</h2>
          <Link to="/taekwondo">
            <button className={styles.imgmodalidades__botao}>
              Mais detalhes
            </button>
          </Link>
        </div>
        <div
          className={styles.imgmodalidades}
          style={{ backgroundImage: `url(${ModFuncional})` }}
        >
          <h2 className={styles.imgmodalidades__texto}>Funcional</h2>
          <Link to="/funcional">
            <button className={styles.imgmodalidades__botao}>
              Mais detalhes
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
