import { Header } from "../../components/header"
import { Link } from "react-router-dom"
import { Tratamentos } from "../../components/tiposTratamentos"
import { Espaco } from "../../components/espacoEAvaliacoes"
import home from '../Home/home.module.css'

import paciente1 from '../../assets/images/home/paciente-1.png'
import paciente2 from '../../assets/images/home/paciente-2.png'
import paciente3 from '../../assets/images/home/paciente-3.png'

import sorriso1 from '../../assets/images/home/antesedepois1.png'
import sorriso2 from '../../assets/images/home/antesedepois2.png'
import sorriso3 from '../../assets/images/home/antesedepois3.png'
import { Footer } from "../../components/footer/footer"



export function Home(){
    return(
        <>
        <Header/>
        { alert("Página em construção!") }
        <div className={home.divisor}></div>
        <main>
            <div className={home.container}>
                <h1>Dental <span>Dev</span></h1>
                <span className={home.slogan}>Devolvendo Sorrisos</span>
                <div className={home.containerPacientes}>
                    <img className={home.pacientes} src={paciente1} alt="Paciente Sorrindo" />
                    <img className={home.pacientes} src={paciente2} alt="Paciente Sorrindo" />
                    <img className={home.pacientes} src={paciente3} alt="Paciente Sorrindo" />
                </div>
                <p>Dental Dev a 15 anos no mercado, devolvendo sorrisos aos nossos clientes com atendimento humanizado e de qualidade</p>
                <p className={home.slogan2}>Você é Melhor Sorrindo!</p>
                <Link className={home.btnContato}>Entrar em Contato</Link>
            </div>
            <Tratamentos/>

            <section className={home.secao}>
                <p className={home.texto_antesEDepois}>Saúde, função e estética caminhando sempre juntas!</p>
                <div className={home.containerAntesEDepois}>
                    <img className={home.antes_depois} src={sorriso1} alt="Antes e Depois de um tratamento" />
                    <img className={home.antes_depois} src={sorriso2} alt="Antes e Depois de um tratamento" />
                    <img className={home.antes_depois} src={sorriso3} alt="Antes e Depois de um tratamento" />
                </div>
            </section>
            <Espaco/>
            <Footer/>
        </main>


        </>
        
    )
}