import React from "react";
import styles from "./Treinadores.module.scss";
import TreinadorJulioBG2 from "../../assets/TreinadorJulioBG2.png";

export default function Treinadores() {
  return (
    <>
      <div  id="treinadores" className={styles.treinadores}>
        <img src={TreinadorJulioBG2} className={styles.treinadores__foto}/>
        <section className={styles.section}>
          <h2 className={styles.section__texto}>Treinador Julio</h2>
          <br/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam cum
            rem cumque iste ipsa veritatis exercitationem nam quod debitis,
            aspernatur labore accusantium praesentium architecto, magni hic,
            nobis quis soluta modi. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Numquam mollitia dignissimos, quae pariatur beatae
            quisquam at aspernatur culpa maxime voluptate nisi, nam itaque
            delectus qui quasi assumenda sit et est?
          </p>
          <br/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque, sunt dolorum a dolor quam, reprehenderit ipsa dolore aliquam voluptatum ex pariatur corrupti. Quis eaque quibusdam non velit nemo ea! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ad ab velit, eveniet inventore consequuntur ut itaque quas quae sed quo! Facilis quidem exercitationem ullam repellendus sed amet doloribus. Voluptas!</p>
        </section>
        
      </div>
      
    </>
  );
}
