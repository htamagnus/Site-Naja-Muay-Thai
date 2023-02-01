import React from 'react'
import styles from './Footer.module.scss'
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";


export default function Footer() {
  return (
    <>
    <div className={styles.rodape}>
      <p>2023 @NajaTeam</p>

            <a
              href="https://www.instagram.com/najatteam/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram size={22} style={{ color: "white" }} />
            </a>
            <a
              href="https://www.facebook.com/julinho.estofador"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook size={22} style={{ color: "white" }} />
            </a>
  
            <a
              href=" https://wa.me/555198242196"
              target="_blank"
              rel="noreferrer"
            >
              <BsWhatsapp size={22} style={{ color: "white" }} />
            </a>
            </div>
          </>
  )
}
