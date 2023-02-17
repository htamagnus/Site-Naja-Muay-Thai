import React from 'react'
import styles from "./Texto.module.scss"

export default function Texto(props) {
  return (
    <div data-aos="fade-up"
    data-aos-duration="1000">
        <p className={styles.texto__principal}>{props.texto}</p>
    </div>
  )
}
