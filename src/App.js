import logo from './logo.svg';
import './App.css';
import { MiComponente } from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';

function App() {
  const ficha_medica = {
    altura: "170cm",
    grupo: "ORH+",
    estado: "Bueno",
    alergias: "Ibuprofeno"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al Master en React!!
        </p>
   
      <div className = 'componentes'>
        <hr/>
        <EventosComponente/>
        <hr/>
        <TercerComponente
          nombre = "Luisa"
          apellido = "Marín"
          ficha = {ficha_medica}
        />
        <hr/>
        <SegundoComponente/>
        <hr/>
        <MiComponente/>       
        <hr/>
      </div>     
      </header>
    </div>
  );
}
export default App;
