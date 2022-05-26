import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {

  const [isAddedToCart, setAddedToCart] = useState(false)
  const [quantityAdded, setQuantityAdded] = useState('')

  const {addItem} = useContext(CartContext)

  function onAdd(quantityToAdd) {

    addItem(item,quantityToAdd)
    setAddedToCart(true)
    quantityToAdd === 1 ?
    setQuantityAdded('un producto agregado')
    : setQuantityAdded(`${quantityToAdd} productos agregados`)
  }

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl content-start mb-4 mt-0 mx-2 lg:mx-4">
        <figure><img className="w-4/6 lg:w-auto" src={item.imgUrl} alt="Imagen producto"/></figure>
        <div className="card-body">
          <h2 className="card-title text-lg lg:text-4xl justify-center text-paleta-textoCard">{item.titulo}</h2>
          <p className="lg:text-4xl">${item.precio},00</p>
          <p className="text-justify text-lg lg:text-2xl md:mt-4">{item.descripcion}</p>
          {
            isAddedToCart ? 
            <div className="my-4">
              <p className="font-bold italic text-2xl">Agregado al carrito</p>
              <p className="text-xl">{quantityAdded}</p>
              <Link to='/cart'>
                <button className="shadow btn btn-sm md:btn-md px-3 bg-paleta-fondoNavbar hover:bg-paleta-colorNavbar hover:border-paleta-colorNavbar">ir al carrito</button>
              </Link>
            </div>
            : <ItemCount stock={item.stock} initial="1" onAdd={onAdd}/>
          }
          <div className="card-actions justify-end mt-4">
            <Link to={'/'}>
              <button className="btn btn-outline border-paleta-colorButton text-paleta-colorButton hover:bg-paleta-colorButton">Volver</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default ItemDetail