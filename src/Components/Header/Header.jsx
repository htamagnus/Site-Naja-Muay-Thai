import styles from "./Header.module.scss";

import { Link } from "react-router-dom";

import LogoNaja from "../../assets/LogoNaja.png";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

export default function Header() {
  return (
    <header className={styles.navegacao}>
      <ul className={styles.navegacao__listas}>
        <img
          src={LogoNaja}
          alt="Logo NajaTeam Torres, redondo com uma cobra no meio"
        ></img>
        <a href="#modalidades" className={styles.navegacao__li}>Modalidades</a>
        <a href="#treinadores" className={styles.navegacao__li}>Treinadores</a>
        <a href="#maps" className={styles.navegacao__li}>Endereço</a>
        <Link to="/sobre" style={{ textDecoration: 'none'}}>
        <li className={styles.navegacao__li}>Sobre</li>
        </Link>
        <div className={styles.links}>
          <a
            href="https://www.instagram.com/najatteam/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram size={28} style={{ color: "white" }} />
          </a>
          <a
            href="https://www.facebook.com/julinho.estofador"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook size={28} style={{ color: "white" }} />
          </a>

          <a
            href=" https://wa.me/555198242196"
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp size={28} style={{ color: "white" }} />
          </a>
        </div>
      </ul>
    </header>
  );
}
