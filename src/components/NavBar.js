import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {

  return (

        <div className="navbar fixed flex justify-between bg-paleta-fondoNavbar z-10">       
          <div className="flex-1 order-2 sm:order-first">
            <Link to={'/'} className="btn btn-ghost normal-case text-2xl font-bold text-paleta-colorNavbar sm:px-2">ShopSport</Link>
          </div>
          {/* items desktop */}
          <ul tabIndex="0" className="p-2 w-56 sm:flex hidden sm:order-2 bg-paleta-fondoNavbar text-paleta-colorFondo">
              <li className="btn btn-ghost text-lg"><Link to='/category/calzado'>Calzado</Link></li>
              <li className="btn btn-ghost text-lg"><Link to='/category/vestimenta'>Vestimenta</Link></li>
          </ul>
          {/* vista mobile */}
          <div className="dropdown dropdown-start order-1">
            {/* botón menú */}
            <label tabIndex="0" className="btn btn-square btn-ghost sm:hidden flex-1 text-paleta-colorFondo">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
            {/*items mobile*/}
            <ul tabIndex="0" className="dropdown-content sm:hidden menu p-1 w-42 font-bold text-xl text-paleta-fondoNavbar bg-paleta-colorFondo">
              <li className="btn btn-ghost text-md sm:text-lg"><Link to='/category/calzado' className="active:text-paleta-fondoNavbar active:bg-paleta-colorFondo">Calzado</Link></li>
              <li className="btn btn-ghost text-md sm:text-lg"><Link to='/category/vestimenta' className="active:text-paleta-fondoNavbar active:bg-paleta-colorFondo">Vestimenta</Link></li>
            </ul>
          </div>

          <CartWidget/>
          
          <div className="dropdown dropdown-end order-4 sm:pr-2">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <ul tabIndex="0" className="menu hover:bg-paleta-colorFondo menu-compact dropdown-content mt-3 p-2 shadow font-bold text-paleta-fondoNavbar bg-paleta-colorFondo rounded-box w-52">
              <li>
                <a className="justify-between active:text-paleta-fondoNavbar active:bg-paleta-colorFondo">
                  Profile
                  <span className="badge border-paleta-colorNavbar bg-paleta-colorNavbar">New</span>
                </a>
              </li>
              <li><a className="active:text-paleta-fondoNavbar active:bg-paleta-colorFondo">Settings</a></li>
              <li><a className="active:text-paleta-fondoNavbar active:bg-paleta-colorFondo">Logout</a></li>
            </ul>
          </div>
        </div>
  )
}

export default NavBar