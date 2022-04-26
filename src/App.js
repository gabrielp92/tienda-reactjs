import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <div className="App overflow-hidden bg-paleta-colorFondo">
      <header className="h-20 sm:h-28">
        <NavBar/>
      </header>
      <main className="App-header bg-paleta-colorFondo">
        <ItemListContainer/>
      </main>
      <footer className="footer font-bold bg-paleta-colorFondoFooter text-paleta-colorTextoFooter py-2">
        <h3>Gabriel Ignacio Paez</h3>
      </footer>
    </div>
  );
}

export default App;
