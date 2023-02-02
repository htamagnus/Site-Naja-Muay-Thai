import React from "react";
import styles from "./ButtonWhats.module.scss";
import { BsWhatsapp } from "react-icons/bs";

export default function ButtonWhats() {
  return (
    <div>
      <a  className={styles.botao} href="https://wa.me/555198242196" target="_blank" rel="noreferrer">
        <BsWhatsapp style={{ color: "white" }} />
      </a>
    </div>
  );
}
