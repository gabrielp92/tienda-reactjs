import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../context/CartContext"

const CartWidget = () => {

  const {cart} = useContext(CartContext)

  const calcularCantProductos = () => {
    return cart.reduce((cantidad, current) => cantidad + current.quantity, 0);
  }

  const subTotal = () => {
    return cart.reduce((subtotal, current) => subtotal + (current.item.precio * current.quantity), 0);
  }

  return (
  <div className="dropdown dropdown-end order-3 md:ml-10 sm:ml-8">
    <label tabIndex="0" className="btn btn-ghost btn-circle md:mr-2">
      <div className="indicator text-paleta-colorFondo">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        <span className="badge bg-paleta-colorNavbar badge-sm indicator-item">{calcularCantProductos()}</span>
      </div>
    </label>
    <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-paleta-colorFondo shadow">
      <div className="card-body">
        <span className="font-bold text-lg text-paleta-fondoNavbar">{calcularCantProductos()} Productos</span>
        <span className="text-paleta-colorTextoCart">Subtotal: ${subTotal()}</span>
        <div className="card-actions flex justify-center">
          <Link to='/cart'>
            <button className="btn btn-block border-paleta-colorNavbar bg-paleta-colorNavbar hover:border-paleta-fondoNavbar hover:bg-paleta-fondoNavbar">ver carrito</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
export default CartWidget
