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
  return (
    <>
      <Texto texto="Treinamento Funcional" />
      <Link to="/">
        <button className={styles.funcional__voltar}>
          <TiArrowBack />
        </button>
      </Link>
      <div className={styles.funcional}>
        <img className={styles.funcional__foto} src={FotoFuncional} />
        <section className={styles.funcional__textos}>
          <h2 className={styles.funcional__titulo}>
            O que é o treinamento funcional?
          </h2>
          <p className={styles.funcional__paragrafo}>
            É uma modalidade bem dinâmica, onde os treinos são sempre
            diferentes! A ideia é focar nos movimentos funcionais, que são
            aqueles que a gente precisa usar no dia a dia, pra correr na rua,
            carregar sacolas de compras, brincar com os filhos.
          </p>
          <p className={styles.funcional__paragrafo}>
            Ao contrário da musculação, o treinamento funcional trabalha o corpo
            como um todo, baseado em algumas capacidades físicas, como força,
            resistência cardio, agilidade, coordenação, potência, e tudo isso
            com um treino super dinâmico que nunca é igual!
          </p>
          <p className={styles.funcional__paragrafo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            error quasi mollitia accusantium et veniam natus odio dolores saepe
            recusandae, reprehenderit officia nobis veritatis obcaecati
            assumenda labore molestias! Dolore, eum.
          </p>
          <button className={styles.funcional__botao}>
            Agende sua aula grátis!
          </button>
        </section>
      </div>

      <div className={styles.funcional}>
        <section className={styles.funcional__textos}>
          <h2 className={styles.funcional__titulo}>
            Qual a diferença entre Funcional e Musculação?
          </h2>
          <p className={styles.funcional__paragrafo}>
            Todo dia temos um treino diferente, não existem “fichas de treino” e
            nem aquele treino “chato” de academias convencionais, onde você
            acaba ficando 3 horas dentro pra conseguir terminar um treino,
            correndo na esteira e revezando aparelhos.
          </p>
          <p className={styles.funcional__paragrafo}>
            Aqui você nunca fica parado e sempre tem um professor acompanhando
            seus treinos e movimentos. São poucos alunos ao invés de uma sala
            cheia, permitindo uma atenção e, consequentemente, melhor alcance
            dos objetivos.
          </p>
          <p className={styles.funcional__paragrafo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            error quasi mollitia accusantium et veniam natus odio dolores saepe
            recusandae, reprehenderit officia nobis veritatis obcaecati
            assumenda labore molestias! Dolore, eum.
          </p>
          <button className={styles.funcional__botao}>
            Agende sua aula grátis!
          </button>
        </section>
        <img id={styles.esconder} className={styles.funcional__foto} src={FotoFuncional2} />
      </div>

      <div className={styles.funcional}>
        <img id={styles.esconder} className={styles.funcional__foto} src={FotoFuncional3} />
        <section className={styles.funcional__textos}>
          <h2 className={styles.funcional__titulo}>
            Treinamento Funcional Emagrece? Tem resultado?
          </h2>
          <p className={styles.funcional__paragrafo}>
            ​No Treinamento Funcional você consegue, em uma hora, ter um alto
            gasto calórico e trabalhar muito o condicionamento físico e
            definição muscular! Ou seja, Treinamento Funcional emagrece,
            condiciona e fortalece! Em duas semanas você já enxerga resultado na
            sua performance!
          </p>
          <p className={styles.funcional__paragrafo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            nesciunt quaerat, quibusdam fugit beatae debitis? Doloremque quis
            tempore magni non maiores, voluptates aliquam sequi mollitia
            temporibus officia dignissimos. Aperiam, laboriosam.
          </p>
          <p className={styles.funcional__paragrafo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            error quasi mollitia accusantium et veniam natus odio dolores saepe
            recusandae, reprehenderit officia nobis veritatis obcaecati
            assumenda labore molestias! Dolore, eum.
          </p>
          <button className={styles.funcional__botao}>
            Agende sua aula grátis!
          </button>
        </section>
      </div>
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
