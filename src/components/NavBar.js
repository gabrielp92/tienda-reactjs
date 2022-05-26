import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from "react";

const NavBar = () => {

  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    const db = getFirestore();
    const categoryCollection = collection(db,'category')
    getDocs(categoryCollection).then((snapshot)=>{

      const categoriasAux = []
      snapshot.docs.map(cat => { categoriasAux.push( { id:cat.id, ...cat.data()} )})
      setCategorias(categoriasAux)
    })
   
  }, [])
  
  return (

        <div className="navbar fixed flex justify-between bg-paleta-fondoNavbar z-10 border-b-2 border-b-paleta-colorFondo bg-gradient-to-r from-paleta-colorNavbar via-paleta-colorNavbarMedio to-paleta-fondoNavbar">       
          <div className="flex-1 order-2 sm:order-first">
            <Link to={'/'} className="btn btn-ghost normal-case text-2xl font-bold text-paleta-colorFondo hover:bg-transparent sm:px-2">ShopSport</Link>
          </div>
          {/* items desktop */}
          <ul tabIndex="0" className="p-1 w-56 sm:flex hidden sm:order-2 bg-transparent text-paleta-colorFondo">
            {
              categorias.map( (c) =>{  return <li key={c.id} className="btn btn-ghost text-lg"><Link to={`/category/${c.key}`}>{c.title}</Link></li> })
            }
          </ul>
          {/* vista mobile */}
          <div className="dropdown dropdown-start order-1">
            {/* botón menú */}
            <label tabIndex="0" className="btn btn-square btn-ghost sm:hidden flex-1 text-paleta-colorFondo">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
            {/*items mobile*/}
            <ul tabIndex="0" className="dropdown-content sm:hidden menu p-1 w-42 font-bold text-xl text-paleta-colorTextoButton bg-paleta-colorNavbar">
            {
              categorias.map( (c) =>{  return <li key={c.id} className="btn btn-ghost text-md sm:text-lg"><Link to={`/category/${c.key}`} className="active:text-paleta-fondoNavbar active:bg-paleta-colorFondo">{c.title}</Link></li> })
            }
            </ul>
          </div>
          <CartWidget/>
        </div>
  )
}

export default NavBar