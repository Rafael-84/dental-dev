
import tratamentos from './tratamentos.module.css'

import dentreBrilhando from '../../assets/images/tipos_tratamentos/dentre-brilhando.png'
import dentes from '../../assets/images/tipos_tratamentos/dentes.png'
import denteRestauracao from '../../assets/images/tipos_tratamentos/dente-restauracao.png'
import denteSorrindo from '../../assets/images/tipos_tratamentos/dente-sorrindo.png'

export function Tratamentos() {


    return (
        <>
            <div className={tratamentos.container}>
                <div className={tratamentos.divisor}></div>

                <h2>Tipos de Tratamentos</h2>

                <div className={tratamentos.container_tratamentos} >
                    <div className={tratamentos.imagespng}>
                        <img src={dentreBrilhando} alt="Dentre Brilhando" />
                        <span>Clareamento Dental</span>
                    </div>
                    <div className={tratamentos.imagespng}>
                        <img src={dentes} alt="Dentes" />
                        <span>Planejamento Estético Digital</span>
                    </div>
                    <div className={tratamentos.imagespng}>
                        <img src={denteRestauracao} alt="Dente Restauracao" />
                        <span>Restaurações Indiretas de Porcelana</span>
                    </div>
                    <div className={tratamentos.imagespng}>
                        <img src={denteSorrindo} alt="Dente Sorrindo" />
                        <span>Laminados Cerâmicos (Facetas e Lentes de Contato)</span>
                    </div>
                </div>
                <div className={tratamentos.textoTratamento}>
                        <p>“Harmonização do Sorriso de forma individual e personalizada através de planejamento digital.”</p>
                    </div>

            </div>

            <div className={tratamentos.divisor}></div>
        </>

    )
}


