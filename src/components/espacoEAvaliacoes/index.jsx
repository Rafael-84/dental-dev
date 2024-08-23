
import sala1 from "../../assets/images/espaco_e_avaliacoes/sala1.png"
import sala2 from "../../assets/images/espaco_e_avaliacoes/sala2.png"
import sala3 from "../../assets/images/espaco_e_avaliacoes/sala3.png"
import sala4 from "../../assets/images/espaco_e_avaliacoes/sala4.png"
import sala5 from "../../assets/images/espaco_e_avaliacoes/sala5.png"
import sala6 from "../../assets/images/espaco_e_avaliacoes/sala6.png"
import comentario1 from "../../assets/images/espaco_e_avaliacoes/comentario1.png"
import comentario2 from "../../assets/images/espaco_e_avaliacoes/comentario2.png"
import comentario3 from "../../assets/images/espaco_e_avaliacoes/comentario3.png"
import comentario4 from "../../assets/images/espaco_e_avaliacoes/comentario4.png"

import espaco from "./espaco.module.css"

export function Espaco(){
    return(
        <>
            <section className={espaco.section}>

                <h2>Todo nosso espaço foi  planejado com muito carinho  para oferecer conforto e qualidade  durante o seu atendimento</h2>
                
                <div className={espaco.containerEspaco}>
                    <div className={espaco.salas}>
                        <img src={sala1} alt="Sala consultório" />
                    </div>
                    <div className={espaco.salas}>
                        <img src={sala2} alt="Sala consultório" />
                    </div>
                    <div className={espaco.salas}>
                        <img src={sala3} alt="Sala consultório" />
                    </div>
                    <div className={espaco.salas}>
                        <img src={sala4} alt="Sala consultório" />
                    </div>
                    <div className={espaco.salas}>
                        <img src={sala5} alt="Sala consultório" />
                    </div>
                    <div className={espaco.salas}>
                        <img src={sala6} alt="" />
                    </div>
                </div>

                    <h3>O que os pacientes dizem sobre nós!</h3>

                <div className={espaco.containerAvaliacoes}>

                    <div className={espaco.avaliacoes}>
                        <img src={comentario1} alt="Avaliações do pacientes" />
                    </div>
                    <div className={espaco.avaliacoes}>
                        <img src={comentario2} alt="Avaliações do pacientes" />
                    </div>
                    <div className={espaco.avaliacoes}>
                        <img src={comentario3} alt="Avaliações do pacientes" />
                    </div>
                    <div className={espaco.avaliacoes}>
                        <img src={comentario4} alt="Avaliações do pacientes" />
                    </div>
                </div>
            </section>
        </>
    )
}