import React from "react";
import styles from "./Taekwondo.module.scss";
import Texto from "../../Components/Texto/Texto";
import Footer from "../../Components/Footer/Footer";
import FotoTaekwondo from "../../assets/FotoTaekwondo.jpg";
import FotoTaekwondo2 from "../../assets/FotoTaekwondo2.jpg";
import FotoTaekwondo3 from "../../assets/FotoTaekwondo3.jpg";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function MuayThai() {
  return (
    <>
      <Texto texto="Taekwondo" />
      <Link to="/">
        <button className={styles.taekwondo__voltar}>
          <TiArrowBack />
        </button>
      </Link>
      <div className={styles.taekwondo}>
        <img className={styles.taekwondo__foto} src={FotoTaekwondo} />
        <section className={styles.taekwondo__textos}>
          <h2 className={styles.taekwondo__titulo}>O que é o taekwondo?</h2>
          <p className={styles.taekwondo__paragrafo}>
            O taekwondo é um esporte olímpico onde os praticantes usam os punhos
            para ataques e defesas. Além de socos e esquivas, as aulas de
            taekwondo são bastante aeróbicas e envolvem pular corda, correr,
            fazer flexão de braço, abdominais e muito mais.
          </p>
          <p className={styles.taekwondo__paragrafo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            nesciunt quaerat, quibusdam fugit beatae debitis? Doloremque quis
            tempore magni non maiores, voluptates aliquam sequi mollitia
            temporibus officia dignissimos. Aperiam, laboriosam.
          </p>
          <p className={styles.taekwondo__paragrafo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            error quasi mollitia accusantium et veniam natus odio dolores saepe
            recusandae, reprehenderit officia nobis veritatis obcaecati
            assumenda labore molestias! Dolore, eum.
          </p>
          <a href="https://wa.me/555198242196" target="_blank" rel="noreferrer">
          <button className={styles.taekwondo__botao}>
            Agende sua aula grátis!
          </button>
          </a>
        </section>
      </div>

      <div className={styles.taekwondo}>
        <section className={styles.taekwondo__textos}>
          <h2 className={styles.taekwondo__titulo}>Pra quem é o taekwondo?</h2>
          <p className={styles.taekwondo__paragrafo}>
            Nossas aulas de boxe são pra todo mundo! Você que cresceu assistindo
            Rocky e ouvindo sobre Muhammad Ali, Mike Tyson, Éder Jofre, entre
            tantas lendas do boxe, e que quer treinar com a melhor equipe e
            estrutura da região. Você que quer aprender a lutar e está à procura
            de uma academia de boxe para começar, ou você que está buscando uma
            aula diferente, para fazer exercício e se divertir ao mesmo tempo.
          </p>
          <p className={styles.taekwondo__paragrafo}>
            Você que quer aprender a lutar e está à procura de uma academia de
            taekwondo para começar, ou você que está buscando uma aula
            diferente, para fazer exercício e se divertir ao mesmo tempo.
          </p>
          <p className={styles.taekwondo__paragrafo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            error quasi mollitia accusantium et veniam natus odio dolores saepe
            recusandae, reprehenderit officia nobis veritatis obcaecati
            assumenda labore molestias! Dolore, eum.
          </p>
          <a href="https://wa.me/555198242196" target="_blank" rel="noreferrer">
          <button className={styles.taekwondo__botao}>
            Agende sua aula grátis!
          </button>
          </a>
        </section>
        <img id={styles.esconder} className={styles.taekwondo__foto} src={FotoTaekwondo2} />
      </div>

      <div className={styles.taekwondo}>
        <img id={styles.esconder} className={styles.taekwondo__foto} src={FotoTaekwondo3} />
        <section className={styles.taekwondo__textos}>
          <h2 className={styles.taekwondo__titulo}>
            Quais os benefícios do taekwondo?
          </h2>
          <p className={styles.taekwondo__paragrafo}>
            Nocaute na gordura e no sedentarismo! Os treinos são intensos, com
            queima de gordura e alta preparação física! Além disso, melhora a
            coordenação e a liberação de endorfina garante a sensação de
            bem-estar e alívio do stress.
          </p>
          <p className={styles.taekwondo__paragrafo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            nesciunt quaerat, quibusdam fugit beatae debitis? Doloremque quis
            tempore magni non maiores, voluptates aliquam sequi mollitia
            temporibus officia dignissimos. Aperiam, laboriosam.
          </p>
          <p className={styles.taekwondo__paragrafo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            error quasi mollitia accusantium et veniam natus odio dolores saepe
            recusandae, reprehenderit officia nobis veritatis obcaecati
            assumenda labore molestias! Dolore, eum.
          </p>
          <a href="https://wa.me/555198242196" target="_blank" rel="noreferrer">
          <button className={styles.taekwondo__botao}>
            Agende sua aula grátis!
          </button>
          </a>
        </section>
      </div>
      <Texto texto="Turmas e horários taekwondo" />

      <div className={styles.horarios}>
        <section className={styles.horarios__card}>
          <h2 className={styles.horarios__titulo}>Mista</h2>
          <p className={styles.horarios__paragrafo}>
            Horários: <br />
            13h
            <br />
            14h
            <br />
            16h
          </p>
          <button className={styles.horarios__botao}>
            Agendar experimental
          </button>
        </section>
      </div>
      <Footer />
    </>
  );
}
