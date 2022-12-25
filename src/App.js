import logo from './logo.svg';
import './App.css';
import {MiPrimerEstado} from './components/MiPrimerEstado';
import { EjercicioUnoComponente } from './components/EjercicioUnoComponente';

function App() {

  var anioActual = new Date().getFullYear();
  alert(anioActual);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          El estado en React - Hook UseState
        </h1>

        <div className='componentes'>

          <hr/>
          <EjercicioUnoComponente anioActual={anioActual}/>
          <hr/>
          <MiPrimerEstado/>

        </div>

      </header>
    </div>
  );
}

export default App;
