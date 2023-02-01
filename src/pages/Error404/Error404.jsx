import styles from "./Error404.module.scss";
import Erro404 from "./Erro404.jpg";
import { useNavigate } from "react-router-dom";
import { TiArrowBack } from 'react-icons/ti'

export default function Error404() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)} className={styles.voltar}>
      <TiArrowBack/>
      </button>
      
      <div className={styles.error}>
        <img
          src={Erro404}
          alt="Imagem de uma página com erro 404, simbolizando que não está funcionando. Contém uma ilustração de um robô arrumando suas peças"
        />
      </div>
    </>
  );
}
