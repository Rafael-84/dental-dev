
import { Link } from 'react-router-dom';
import { Header } from '../../components/header';
import { Tratamentos } from "../../components/tiposTratamentos"
import { Espaco } from "../../components/espacoEAvaliacoes"
import { Footer } from "../../components/footer/footer"

import pediatria from './odontopedi.module.css';
import crianca1 from '../../assets/images/odontopediatria/crianca1.png';
import crianca2 from '../../assets/images/odontopediatria/crianca2.png';
import draAline from '../../assets/images/odontopediatria/draAline.png';
import draRoberta from '../../assets/images/odontopediatria/draRoberta.png';




export function Odontopediatria() {
    return (

        <main>
            <Header />
            <div className={pediatria.container}>
                <h1>Odontopediatria</h1>

                <div className={pediatria.containerPacientes}>
                    <img className={pediatria.pacientes} src={crianca1} alt="Criança Sorrindo" ></img>
                    <img className={pediatria.pacientes} src={crianca2} alt="Criança Sorrindo" ></img>
                </div>
                <p className={pediatria.descricao} >De forma lúdica e tranquila, conseguimos conquistar a confiança, transpor barreiras e deixar um sorriso lindo e saudável!</p>

                <Link><span className={pediatria.botao}>Agendar uma Consulta</span></Link>
            </div>
            <div className={pediatria.divisor}></div>
            <section className={pediatria.containerpediatria}>                
                <h2>Especialistas</h2>
                <div className={pediatria.especialistas}>
                    <div className={pediatria.doutoras} ><img src={draAline} alt="Dra. Aline Clara" /><p>Dra. Aline Clara</p><span>CROSP 000000</span></div>
                    <div className={pediatria.doutoras} ><img src={draRoberta} alt="Dra. Roberta Garcia" /><p>Dra. Roberta Garcia</p><span>CROSP 000000</span></div>
                </div>
                <h3 className={pediatria.titleProcedimentos} >Procedimentos</h3>
                <ul>
                    <ol>
                        <li>Atendimento à pacientes com necessidades especiais</li>
                        <li>Ortodontia Preventiva (Ortodontia Infantil) </li>
                        <li>Frenectomia em bebês</li>
                    </ol>
                    <ol>
                        <li>A Primeira Consulta</li>
                        <li>Anamnese Geral e Dirigida;</li>
                        <li> Condicionamento Infantil;</li>
                        <li>Orientação de Higiene Bucal:</li>
                        <li>Técnicas de Escovação;</li>
                        <li>Exame Clínico</li>
                        <li>Orientações aos pais.</li>
                    </ol>
                    <ol>
                        <li>Baby Care ( Odontologia para bebês de 0-3 anos)</li>
                        <li>Pré-Natal Odontológico</li>
                        <li>Neonatologia com ênfase em Aleitamento Materno</li>
                    </ol>
                </ul>
                <h3>Cada detalhe é  cuidadosamente pensado e executado de maneira excepcional, sempre em busca da naturalidade</h3>
                <div className={pediatria.slider}>Espaço slider</div>
            </section>
            <Tratamentos/>
            <Espaco/>
            <Footer/>
        </main>
    )
}