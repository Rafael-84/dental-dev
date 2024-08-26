import { Link } from "react-router-dom"
import header from './header.module.css'
import logo from '../../assets/images/header/logo.png'
export function Header() {



    return (
        <>
        <header>
            <nav className={header.menu}>
                <Link to="/" className={header.logo}><img src={logo} alt="Logo da dental dev" /><h5>Dental<span>Dev</span></h5></Link>
                <input type="checkbox" className={header.menu_faketrigger}/>
                
                <div className={header.menu_lines}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <ul>
                    <li><Link to='#'>1º Consulta</Link></li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='#'>Especialidades <i className="fas fa-caret-down"></i></Link>
                        <div className={header.dropDown} >
                            <ul>
                                <li><Link to='/odontopediatria'>Odontopediatria</Link></li>
                                <li><Link to='/dentisticarestauradora'>Dentística Restauradora</Link></li>
                                <li><Link to='/avaliacaoinicial'>Avaliação inicial Digital</Link></li>
                                <li><Link to='/endodontia'>Endodontia com Microscópio</Link></li>
                                <li><Link to='/ortodontia'>Ortodontia</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li><Link to='#' >Contato</Link></li>
                </ul>                
            </nav>
        </header>
            <div className={header.divisor}></div>            
        </>
    )
}


