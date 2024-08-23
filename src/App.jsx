import { createBrowserRouter } from "react-router-dom";

import { Home } from './pages/Home'
import { Odontopediatria } from "./pages/Odontopediatria";
import { DentRestauradora } from "./pages/DentisticaRestauradora";
import { Avaliacao } from "./pages/AvaliacaoInicialDigital";
import { Endodontia } from "./pages/EndodontiaComMiscroscopio";
import { Ortodontia } from "./pages/Ortodontia";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/odontopediatria",
    element: <Odontopediatria/>,
  },
  {
    path: "/dentisticarestauradora",
    element: <DentRestauradora/>,
  },
  {
    path: "/avaliacaoinicial",
    element: <Avaliacao/>,
  },{
    path: "/endodontia",
    element: <Endodontia/>,
  },
  {
    path: "/ortodontia",
    element: <Ortodontia/>,
  }
])

export { router };


