import React from 'react'
import styles from "./Texto.module.scss"

export default function Texto(props) {
  return (
    <div>
        <p className={styles.texto__principal}>{props.texto}</p>
    </div>
  )
}
