import CartWidget from "./CartWidget"

const NavBar = () => {

  return (

        <div className="navbar fixed flex justify-between bg-fuchsia-300 z-10">       
          <div className="flex-1 order-2 sm:order-first">
            <a className="btn btn-ghost normal-case text-2xl font-bold text-fuchsia-800 sm:px-2">ShopSport</a>
          </div>
          {/* items desktop */}
          <ul tabIndex="0" className="p-2 w-56 sm:flex hidden sm:order-2 bg-fuchsia-300 text-fuchsia-800">
              <li className="btn btn-ghost text-lg"><a>Calzado</a></li>
              <li className="btn btn-ghost text-lg"><a>Vestimenta</a></li>
          </ul>
          {/* vista mobile */}
          <div className="dropdown dropdown-start order-1">
            {/* botón menú */}
            <label tabIndex="0" className="btn btn-square btn-ghost sm:hidden flex-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
            {/*items mobile*/}
            <ul tabIndex="0" className="dropdown-content sm:hidden menu p-2 w-56 bg-fuchsia-300 font-bold text-xl text-fuchsia-800">
              <li className="btn btn-ghost text-lg"><a>Calzado</a></li>
              <li className="btn btn-ghost text-lg"><a>Vestimenta</a></li>
            </ul>
          </div>

          <CartWidget/>
          
          <div className="dropdown dropdown-end order-4 sm:pr-2">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-fuchsia-300 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
  )
}

export default NavBar