import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../context/CartContext"

const Cart = () => {

  const {cart, removeItem, clear, subTotal} = useContext(CartContext)

  return (
    <>
      {
        cart.length === 0 ? (
          <div className="text-paleta-fondoNavbar">
            <h1>Su carrito está vacío.</h1>
            <h3>
              Agregue algunos productos haciendo click
              <Link to="/">
                <span className="font-bold"> aquí</span>
              </Link>
            </h3>
          </div>
        ):(
        <div className="w-full">

          <div>
            <div>
            {
              cart.map( i => (
                <div key={i.item.id} className="flex flex-wrap justify-between bg-paleta-colorFondoCard mx-3 md:mx-6 lg:mx-12 mb-5 drop-shadow-xl">
                    
                    <div className="flex h-fit md:text-2xl items-center">
                        <img src={i.item.imgUrl} className="w-24 md:ml-8" alt={i.item.titulo}/>
                        <div className="flex flex-nowrap flex-col items-start ml-4">
                          <p className="text-sm">{i.item.titulo}</p>
                          <p className="text-lg font-bold">${i.item.precio}</p>
                        </div>
                      
                    </div>
                    {/*agregar boton para variar la cantidad de items */}

                    <div className="flex flex-nowrap md:justify-between md:items-center gap-x-4 p-3 ml-auto">
                      <h2 className="text-xl lg:text-2xl font-bold">
                        ${i.item.precio * i.quantity}
                      </h2>
                      <button className="btn btn-sm md:btn-md btn-circle btn-outline md:ml-4 md:mr-8" onClick={() => {
                          removeItem(i.item.id);
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                </div>
              ))
            }
            </div>
          </div>

          <div className="bg-paleta-colorFondoCard mx-3 md:mx-6 lg:mx-12 my-5 drop-shadow-xl p-4">
            <div className="flex flex-col mb-4 text-xl lg:text-2xl">
              <h1 className="leading-none lg:leading-tight my-0">El total de su compra es</h1>
              <h1 className="my-0 font-bold">${subTotal()}</h1>
            </div>
            <div className="flex flex-wrap flex-row justify-center gap-3 md:gap-5">
              <button className="btn btn-sm md:btn-md border-paleta-colorNavbar bg-paleta-colorNavbar font-bold text-paleta-fondoNavbar hover:text-paleta-colorTextoButton"
                onClick={() => {
                  clear();
                }}
              >
                Vaciar carrito
              </button>
              <button className="btn btn-sm md:btn-md border-paleta-fondoNavbar bg-paleta-fondoNavbar font-bold">
                Terminar compra
              </button>
            </div>
          </div>
        
        </div>
        )
      }
    </>
  )
}
export default Cart