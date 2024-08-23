
import { Header } from '../../components/header';
import pediatria from './odontopedi.module.css';

export function Odontopediatria() {
    return (
        <div>
            <Header />
            <main>
                <div className={pediatria.container}>
                    <h1>Pagina Odontopediatria</h1>
                </div>
            </main>
        </div>
    )
}