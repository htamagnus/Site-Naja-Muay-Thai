import React, { useState } from "react";
import styles from "./Localizacao.module.scss";

export default function Localizacao() {
  const [opcao, setOpcao] = useState();
  console.log(opcao);

  return (
    <div id="maps" className={styles.maps}>
      <iframe
        title="maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d869.51746377069!2d-49.729236903891746!3d-29.33894847847744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952269a729f19e75%3A0x30c798385382fa1e!2sClube%20Atl%C3%A2ntico%20de%20Ca%C3%A7a%20e%20Pesca%20-%20CAPESCA!5e0!3m2!1spt-BR!2sbr!4v1675106425674!5m2!1spt-BR!2sbr"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        width={600}
        height={450}
      ></iframe>
      <section className={styles.agendar}>
        <h2 className={styles.agendar__titulo}>Agende sua aula experimental</h2>
        <select
          className={styles.agendar__selecionar}
          onChange={(opcao) => setOpcao(opcao.target.value)}
        >
          <option value="" disabled selected hidden>
            Escolha a modalidade
          </option>
          <option value="1">Muay Thai</option>
          <option value="2">Boxe</option>
          <option value="3">Taekwondo</option>
          <option value="4">Funcional</option>
        </select>
        <input placeholder= "Qual a melhor data?" type="date"></input>
      </section>

    </div>
  );
}
