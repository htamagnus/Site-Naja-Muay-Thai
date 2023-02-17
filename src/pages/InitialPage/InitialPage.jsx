import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Header from '../../Components/Header/Header'
import Modalidades from '../../Components/Modalidades/Modalidades'
import Texto from '../../Components/Texto/Texto'
import Treinadores from '../../Components/Treinadores/Treinadores'
import Localizacao from '../../Components/Localizacao/Localizacao'
import Footer from '../../Components/Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


export default function InitialPage() {
  return (
    <>
    <Header /> 
    <Banner />
    <Texto texto="Saiba mais sobre nossos treinos"/>
    <Modalidades />
    <Texto texto="Conheça a nossa equipe"/>
    <Treinadores />
    <Texto texto="Nosso endereço"/>
    <Localizacao />
    <Footer />
    </>
  )
}
