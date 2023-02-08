import React from "react";
import styles from "./MuayThai.module.scss";
import Texto from "../../Components/Texto/Texto";
import Footer from "../../Components/Footer/Footer";
import FotoMuayThai from "../../assets/FotoMuayThai.jpg";
import FotoMuayThai2 from "../../assets/FotoMuayThai2.jpg";
import FotoMuayThai3 from "../../assets/FotoMuayThai3.jpg";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function MuayThai() {
  const dadosMuayThai = [
    {
      id: "1",
      image: FotoMuayThai,
      title: "O que é o Muay Thai?",
      text: "Indiscutivelmente uma das lutas mais populares atualmente, o Muay Thai é denominado de Arte das 8 Armas pelo uso combinado das mãos, cotovelos, joelhos e pés, numa aula mais que movimentada",
      text2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt error quasi mollitia accusantium et veniam natus odio dolores saepe recusandae, reprehenderit officia nobis veritatis obcaecatiassumenda labore molestias! Dolore, eum.",
      text3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt error quasi mollitia accusantium et veniam natus odio dolores saepe recusandae, reprehenderit officia nobis veritatis obcaecatiassumenda labore molestias! Dolore, eum.",
    },
    {
      id: "2",
      image: FotoMuayThai2,
      title: "Para quem é o Muay Thai?",
      text: "Temos uma ótima estrutura e uma ótima equipe para atender desde iniciantes e pessoas que nunca praticaram, até quem já pratica a arte. Venha entender na prática o motivo do sucesso das nossas aulas de Muay Thai.",
      text2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt error quasi mollitia accusantium et veniam natus odio dolores saepe recusandae, reprehenderit officia nobis veritatis obcaecatiassumenda labore molestias! Dolore, eum.",
      text3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt error quasi mollitia accusantium et veniam natus odio dolores saepe recusandae, reprehenderit officia nobis veritatis obcaecatiassumenda labore molestias! Dolore, eum.",
    },
    {
      id: "3",
      image: FotoMuayThai3,
      title: "Quais os benefícios do Muay Thai?",
      text: "O Muay Thai traz mudanças perceptíveis ao corpo, tem alto gasto calórico, tonifica e ainda desenvolve um ótimo condicionamento físico, concentração e autoconfiança. Não é à toa que ganha cada vez mais adeptos, porque é uma ótima alternativa de aula e ainda trabalha o corpo como todo.",
      text2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt error quasi mollitia accusantium et veniam natus odio dolores saepe recusandae, reprehenderit officia nobis veritatis obcaecatiassumenda labore molestias! Dolore, eum.",
      text3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt error quasi mollitia accusantium et veniam natus odio dolores saepe recusandae, reprehenderit officia nobis veritatis obcaecatiassumenda labore molestias! Dolore, eum.",
    },
  ];

  return (
    <>
      <Texto texto="Muay Thai" />
      <Link to="/">
        <button className={styles.muaythai__voltar}>
          <TiArrowBack />
        </button>
      </Link>
      {dadosMuayThai.map((data) => (
        <div key={data.id} className={styles.muaythai}>
          <img
            className={styles.muaythai__foto}
            src={data.image}
            alt="ksksdk"
          />
          <section className={styles.muaythai__textos}>
            <h2 className={styles.muaythai__titulo}>{data.title}</h2>
            <p className={styles.muaythai__paragrafo}>{data.text}</p>
            <p className={styles.muaythai__paragrafo}>{data.text2}</p>
            <p className={styles.muaythai__paragrafo}>{data.text3}</p>
            <a
              href="https://wa.me/555198242196"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.muaythai__botao}>
                Agende sua aula grátis!
              </button>
            </a>
          </section>
        </div>
      ))}
      <Texto texto="Turmas e horários Muay Thai" />

      <div className={styles.horarios}>
        <section className={styles.horarios__card}>
          <h2 className={styles.horarios__titulo}>Infantil</h2>
          <p className={styles.horarios__paragrafo}>
            <strong>Terça-Feira:</strong> <br />
            18:00
            <br />
            <br />
            <strong>Sexta-feira:</strong>
            <br /> 18:00
            <br />
          </p>
          <button className={styles.horarios__botao}>
            Agendar experimental
          </button>
        </section>

        <section className={styles.horarios__card}>
          <h2 className={styles.horarios__titulo}>Feminino</h2>
          <p className={styles.horarios__paragrafo}>
            <strong>Segunda-feira:</strong> <br />
            07:00 e 14:00 <br />
            <br />
            <strong>Quarta-feira:</strong> <br />
            07:00 e 14:00
            <br /> <br />
            <strong>Sexta-feira: </strong>
            <br />
            07:00 e 14:00
          </p>
          <button className={styles.horarios__botao}>
            Agendar experimental
          </button>
        </section>

        <section className={styles.horarios__card}>
          <h2 className={styles.horarios__titulo}>Misto</h2>
          <p className={styles.horarios__paragrafo}>
            <strong>Segunda-feira:</strong> <br />
            19:00, 20:00 e 21:00
            <br />
            <strong>Terça-feira:</strong> <br /> 10:00
            <br />
            <strong>Quarta-feira:</strong> <br /> 19:00, 20:00 e 21:00
            <br />
            <strong>Quinta-feira:</strong> <br /> 10:00
            <br />
            <strong>Sexta-feira:</strong> <br /> 19:00 e 20:00
          </p>
          <button className={styles.horarios__botao}>
            Agendar experimental
          </button>
        </section>

        <section className={styles.horarios__card}>
          <h2 className={styles.horarios__titulo}>Atletas profissionais</h2>
          <p className={styles.horarios__paragrafo}>
            <strong>Sábado:</strong> 18:00
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
