import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>
      <div className="App overflow-hidden bg-paleta-colorFondo">
        <header className="h-20 sm:h-28">
          <NavBar/>
        </header>
        <main className="App-header bg-paleta-colorFondo">
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        </Routes>
        </main>
        <footer className="footer font-bold bg-paleta-colorFondoFooter text-paleta-colorTextoFooter py-2">
          <h3>Gabriel Ignacio Paez</h3>
        </footer>
      </div>    
    </BrowserRouter>

  );
}

export default App;
