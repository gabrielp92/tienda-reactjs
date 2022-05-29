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
      <div className="card lg:card-side bg-base-100 shadow-xl shadow-paleta-colorShadowItem content-start mb-8 mt-2 mx-2 lg:mx-4">
        <figure className="touch-manipulation"><img className="w-4/6 lg:w-auto" src={item.imgUrl} alt="Imagen producto"/></figure>
        <div className="card-body text-paleta-colorTextoCard">
          <h2 className="card-title text-lg lg:text-4xl justify-center">{item.titulo}</h2>
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