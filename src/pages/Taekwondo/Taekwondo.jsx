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
  const dadosTaekwondo = [
    {
      id: "1",
      image: FotoTaekwondo,
      title: "O que é o taekwondo?",
      text: "O boxe é um esporte olímpico onde os praticantes usam os punhos para ataques e defesas. Além de socos e esquivas, as aulas de boxe são bastante aeróbicas e envolvem pular corda, correr fazer flexão de braço, abdominais e muito mais.",
      text2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt error quasi mollitia accusantium et veniam natus odio dolores saepe recusandae, reprehenderit officia nobis veritatis obcaecatiassumenda labore molestias! Dolore, eum.",
      text3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt error quasi mollitia accusantium et veniam natus odio dolores saepe recusandae, reprehenderit officia nobis veritatis obcaecatiassumenda labore molestias! Dolore, eum.",
    },
    {
      id: "2",
      image: FotoTaekwondo2,
      title: "Pra quem é o taekwondo?",
      text: "Nossas aulas de boxe são pra todo mundo! Você que cresceu assistindo Rocky e ouvindo sobre Muhammad Ali, Mike Tyson, Éder Jofre, entre tantas lendas do boxe, e que quer treinar com a melhor equipe e estrutura da região.",
      text2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt error quasi mollitia accusantium et veniam natus odio dolores saepe recusandae, reprehenderit officia nobis veritatis obcaecatiassumenda labore molestias! Dolore, eum.",
      text3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt error quasi mollitia accusantium et veniam natus odio dolores saepe recusandae, reprehenderit officia nobis veritatis obcaecatiassumenda labore molestias! Dolore, eum.",
    },
    {
      id: "3",
      image: FotoTaekwondo3,
      title: "Quais os benefícios do taekwondo?",
      text: "O Muay Thai traz mudanças perceptíveis ao corpo, tem alto gasto calórico, tonifica e ainda desenvolve um ótimo condicionamento físico, concentração e autoconfiança. Não é à toa que ganha cada vez mais adeptos, porque é uma ótima alternativa de aula e ainda trabalha o corpo como todo.",
      text2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt error quasi mollitia accusantium et veniam natus odio dolores saepe recusandae, reprehenderit officia nobis veritatis obcaecatiassumenda labore molestias! Dolore, eum.",
      text3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt error quasi mollitia accusantium et veniam natus odio dolores saepe recusandae, reprehenderit officia nobis veritatis obcaecatiassumenda labore molestias! Dolore, eum.",
    },
  ];
  return (
    <>
      <Texto texto="Taekwondo" />
      <Link to="/">
        <button className={styles.taekwondo__voltar}>
          <TiArrowBack />
        </button>
      </Link>
      {dadosTaekwondo.map((data) => (
        <div className={styles.taekwondo}>
          <img className={styles.taekwondo__foto} src={data.image} alt="depois"/>
          <section className={styles.taekwondo__textos}>
            <h2 className={styles.taekwondo__titulo}>{data.title}</h2>
            <p className={styles.taekwondo__paragrafo}>
              {data.text}
            </p>
            <p className={styles.taekwondo__paragrafo}>
              {data.text2}
            </p>
            <p className={styles.taekwondo__paragrafo}>
              {data.text3}
            </p>
            <a
              href="https://wa.me/555198242196"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.taekwondo__botao}>
                Agende sua aula grátis!
              </button>
            </a>
          </section>
        </div>
      ))}

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
