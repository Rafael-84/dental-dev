
import footer from './footer.module.css'
import logo from '../../assets/images/header/logo.png'
import pin from "../../assets/images/footer/pinLocalizacao.png"
import { Maps } from '../maps/maps'

export function Footer(){
    return(
        <>
        <footer className={footer.footer}>
                <h2>Aonde estamos!</h2>
                <span>Avenida Francisco Glicério, N° ** - Centro, Campinas - SP, 00000-000 <img src={pin} alt="Pin de Localização" /></span>
            <div className={footer.containerMapa}>
                <Maps/>
            </div>
            <div className={footer.infoDentalDev}>
                
                <div className={footer.infoCRO}>
                    <div className={footer.logo}>
                        <img src={logo} alt="Logo da dental dev" /><h5>Dental<span className={footer.fimLogo}>Dev</span></h5>
                    </div>
                        <span>Clinica Dental Dev Odontologia Especializada - CRO 00***</span>
                        <span>Responsável Técnico Dr ° Robson ***** - CRO **00**  </span>
                        <span> Todos os direitos reservados - Dental Dev @2024</span>
                </div>
                    <h4>Dúvidas?</h4>
                    <p>Entre em contato</p>
                <div className={footer.footerContato}>
                    <p>(**)00000-0000</p>
                    <p>(**)11111-1111</p>
                    <p>@dentaldev.odontologia</p>
                    <p>dentaldev.odontologia@gmail.com</p>                
                </div>
            </div>
        </footer>
            </>
    )
}