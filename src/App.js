import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <main className="App-header bg-primary-content">
        <ItemListContainer greeting='¡Conocé todos nuestros productos!'/>
      </main>
      <footer className="footer font-bold bg-fuchsia-300 py-2">
        <h3>Gabriel Ignacio Paez</h3>
      </footer>
    </div>
  );
}

export default App;
