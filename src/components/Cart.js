import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../context/CartContext"

const Cart = () => {

  const {cart, removeItem, calcularCantProductos, clear, subTotal, lessQuantity, moreQuantity} = useContext(CartContext)

  return (
    <div className="mt-20 sm:mt-24">
      {
        cart.length === 0 ? (
          <div className="text-paleta-colorFondoCard mt-40">
            <h1>Su carrito está vacío.</h1>
            <h3>
              Agregue algunos productos haciendo click
              <Link to="/">
                <span className="font-bold text-paleta-colorNavbar"> aquí</span>
              </Link>
            </h3>
          </div>
        ):(
        <div className="w-full">
          <div>
            <div>
            {
              cart.map( i => (
                <div key={i.item.id} className="flex flex-wrap justify-between text-paleta-colorTextoCard bg-paleta-colorFondoCard mx-3 md:mx-6 lg:mx-12 mb-5 shadow-2xl shadow-paleta-colorShadowItem">
                    
                    <div className="flex h-fit md:text-2xl items-center">
                        <img src={i.item.imgUrl} className="w-24 md:ml-8" alt={i.item.titulo}/>
                        <div className="flex flex-nowrap flex-col items-start ml-4">
                          <p className="text-sm font-medium">{i.item.titulo}</p>
                          <p className="text-lg font-medium">${i.item.precio},00</p>
                          <span className="text-sm">stock: {i.item.stock}</span>
                        </div>
                    
                    </div>
                    <div className="flex flex-nowrap md:justify-between md:items-center gap-x-4 p-3 ml-auto">
                      <button className="btn btn-sm btn-circle btn-outline border-2 text-paleta-fondoNavbar font-bold" onClick={ () => {
                        lessQuantity(i)
                      }}
                      >
                        -
                      </button>
                      <span className="text-xl font-medium">{i.quantity}</span>
                      <button className="btn btn-sm btn-circle btn-outline border-2 text-paleta-fondoNavbar font-bold" onClick={ () => {
                        moreQuantity(i)
                      }}
                      >
                        +
                      </button>
                      <h2 className="text-xl lg:text-2xl font-bold">
                        ${i.item.precio * i.quantity},00
                      </h2>
                      <button className="btn btn-sm md:btn-md btn-circle btn-outline md:ml-4 md:mr-8" onClick={() => {
                          removeItem(i.item.id);
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                </div>
              ))
            }
            </div>
          </div>

          <div className="text-paleta-colorTextoCard bg-paleta-colorFondoCard mx-3 md:mx-6 lg:mx-12 my-5 shadow-xl shadow-paleta-colorShadowItem p-4">
            <div className="flex flex-col mb-4 text-xl lg:text-2xl border-solid">
              <h2 className="font-medium mb-2">{calcularCantProductos()} productos en el carrito</h2>
              <h1 className="font-ultralight leading-none lg:leading-tight my-0">El total de su compra es</h1>
              <h1 className="my-0 mb-3 font-bold">${subTotal()},00</h1>
            </div>
            <div className="flex flex-wrap flex-row justify-center gap-3 md:gap-5">
              <button className="btn btn-outline btn-sm md:btn-md border-paleta-colorNavbar text-paleta-colorNavbar hover:text-paleta-colorTextoButton hover:bg-paleta-colorButton"
                onClick={() => {
                  clear();
                }}
              >
                Vaciar carrito
              </button>
              <button className="btn btn-sm md:btn-md border-paleta-fondoNavbar bg-paleta-fondoNavbar hover:border-paleta-colorNavbar hover:bg-paleta-colorNavbar">
                <Link to='/cart/check-out'>
                  Terminar compra
                </Link>
              </button>
            </div>
          </div>
        
        </div>
        )
      }
    </div>
  )
}
export default Cart