import React from "react";
import styles from "./Funcional.module.scss";
import Texto from "../../Components/Texto/Texto";
import Footer from "../../Components/Footer/Footer";
import FotoFuncional from "../../assets/FotoFuncional.jpg";
import FotoFuncional2 from "../../assets/FotoFuncional2.jpg";
import FotoFuncional3 from "../../assets/FotoFuncional3.jpg";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function MuayThai() {
  const dadosFuncional = [
    {
      id: "1",
      image: FotoFuncional,
      title: "O que é o treinamento funcional?",
      text: "É uma modalidade bem dinâmica, onde os treinos são sempre diferentes! A ideia é focar nos movimentos funcionais, que são aqueles que a gente precisa usar no dia a dia, pra correr na rua, carregar sacolas de compras, brincar com os filhos.",
      text2:
        "Ao contrário da musculação, o treinamento funcional trabalha o corpo como um todo, baseado em algumas capacidades físicas, como força, resistência cardio, agilidade, coordenação, potência, e tudo isso com um treino super dinâmico que nunca é igual!",
      text3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt error quasi mollitia accusantium et veniam natus odio dolores saepe recusandae, reprehenderit officia nobis veritatis obcaecatiassumenda labore molestias! Dolore, eum.",
    },
    {
      id: "2",
      image: FotoFuncional2,
      title: "Qual a diferença entre Funcional e Musculação?",
      text: "Todo dia temos um treino diferente, não existem “fichas de treino” e nem aquele treino “chato” de academias convencionais, onde você acaba ficando 3 horas dentro pra conseguir terminar um treino, correndo na esteira e revezando aparelhos.",
      text2:
        "Aqui você nunca fica parado e sempre tem um professor acompanhando seus treinos e movimentos. São poucos alunos ao invés de uma sala cheia, permitindo uma atenção e, consequentemente melhor alcance dos objetivos.",
      text3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt error quasi mollitia accusantium et veniam natus odio dolores saepe recusandae, reprehenderit officia nobis veritatis obcaecatiassumenda labore molestias! Dolore, eum.",
    },
    {
      id: "3",
      image: FotoFuncional3,
      title: "Treinamento Funcional Emagrece? Tem resultado?",
      text: "No Treinamento Funcional você consegue, em uma hora, ter um alto gasto calórico e trabalhar muito o condicionamento físico e definição muscular! Ou seja, Treinamento Funcional emagrece, condiciona e fortalece! Em duas semanas você já enxerga resultado na  sua performance!",
      text2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt error quasi mollitia accusantium et veniam natus odio dolores saepe recusandae, reprehenderit officia nobis veritatis obcaecatiassumenda labore molestias! Dolore, eum.",
      text3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt error quasi mollitia accusantium et veniam natus odio dolores saepe recusandae, reprehenderit officia nobis veritatis obcaecatiassumenda labore molestias! Dolore, eum.",
    },
  ];
  return (
    <>
      <Texto texto="Treinamento Funcional" />
      <Link to="/">
        <button className={styles.funcional__voltar}>
          <TiArrowBack />
        </button>
      </Link>
      {dadosFuncional.map((data =>
            <div className={styles.funcional}>
            <img
              className={styles.funcional__foto}
              src={data.image}
              alt="depois"
            />
            <section className={styles.funcional__textos}>
              <h2 className={styles.funcional__titulo}>{data.title}</h2>
              <p className={styles.funcional__paragrafo}>{data.text}</p>
              <p className={styles.funcional__paragrafo}>{data.text2}</p>
              <p className={styles.funcional__paragrafo}>{data.text3}</p>
              <a href="https://wa.me/555198242196" target="_blank" rel="noreferrer">
                <button className={styles.funcional__botao}>
                  Agende sua aula grátis!
                </button>
              </a>
            </section>
          </div>
        ))}


   
      <Texto texto="Turmas e horários funcional" />

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
