
import { Link } from 'react-router-dom';
import { Header } from '../../components/header';
import destistaSuper from '../../assets/images/odontopediatria/dentista-super.png'
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
            <section className={pediatria.secaoInstrucao}>
                <h3>A primeira consulta</h3>
                <span>São os pequenos detalhes que fazem TODA a diferença no atendimento infantil</span>
                <div className={pediatria.containerInstrucoes}>
                    <div className={pediatria.instrucao}><h4>Anamnese Geral e Dirigida</h4><p>Na Primeira Consulta Odontológica, uma boa conversa com os papais, mamães e/ou responsáveis é fundamental para conhecermos detalhadamente sobre a saúde geral da criança, os hábitos diários de alimentação e higiene da família e avaliar os possíveis riscos de desenvolvimento de problemas bucais.</p></div>   

                    <div className={pediatria.instrucao}><h4>Condicionamento Infantil (lúdico)</h4><p>Introduzir o ambiente do consultório odontológico de uma forma positiva e tranquila desmistifica a ideia negativa do dentista e estimula a curiosidade da criança! As crianças são extremamente sensíveis à linguagem e à comunicação não verbal e é por esse motivo que o lúdico se torna uma das formas mais eficazes de envolver a criança durante as consultas Cada caso é individualizado e cada criança receberá o condicionamento apropriado.</p></div>  

                    <div className={pediatria.instrucao}><h4>Exame Clínico</h4><p>Na Primeira Consulta Odontológica, uma boa conversa com os papais, mamães e/ou responsáveis é fundamental para conhecermos detalhadamente sobre a saúde geral da criança, os hábitos diários de alimentação e higiene da família e avaliar os possíveis riscos de desenvolvimento de problemas bucais.</p></div>                     

                    <div className={pediatria.instrucao}><h4>Orientação de Higiene Bucal e Técnicas de Escovação</h4><p>Através de variados recursos como brinquedos, bichinhos de pelúcia, personagens, desenho na televisão, livros, bonecos e vídeos ensinamos nossos pequenos noções sobre os cuidados com a sua saúde bucal. De forma lúdica e tranquila, conseguimos conquistar a confiança, transpor barreiras e deixar um sorriso lindo e saudável !</p></div>    

                    <div className={pediatria.instrucao}><h4>Orientações aos Pais e/ou Responsáveis</h4><p>Orientações em relação à dieta, hábitos (chupeta e mamadeira), tipos de escova, creme dental, uso de flúor e outras dicas importantes que fazem da Odontopediatria uma especialidade responsável por promover hábitos saudáveis, resultando em um sorriso harmônico e livre de cáries.</p></div>   
                    <div className={pediatria.instrucao}><img className={pediatria.dentistaPng} src={destistaSuper} alt="#" /></div>
                </div>
            </section>
            <Espaco/>
            <Footer/>
        </main>
    )
}