import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import EmptyComponent from './components/EmptyComponent';

function App() {

  return (
    <BrowserRouter>
      <div className="App bg-paleta-colorFondo">
        <header className="h-20 sm:h-28">
          <NavBar/>
        </header>
        <main className="App-header bg-paleta-colorFondo">
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/tienda-reactjs' element={<ItemListContainer/>}/> {/* para que funcione bien gh-pages */}
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<EmptyComponent/>}/>
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
