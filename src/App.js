import './App.css';
import Header from './componentes/Header.js';
import Sobre from './componentes/Sobre.js';
import Habilidades from './componentes/Habilidades.js';
import Projetos from './componentes/Projetos.js';
import Footer from './componentes/Footer.js';

function App() {
  return (
    <div className="App">
      <div className="btn">
        <button>dark / light</button>
    </div>
      <Header />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Footer />
    </div>
  );
}

export default App;
