import { Link } from "react-router-dom"

const ItemDetail = ({item}) => {
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl content-start mb-4 mt-0 mx-2 lg:mx-4">
        <figure><img className="w-4/6 lg:w-auto" src={item.imgUrl} alt="Imagen"/></figure>
        <div className="card-body">
          <h2 className="card-title text-lg lg:text-4xl justify-center text-paleta-fondoNavbar">{item.titulo}</h2>
          <p className="font-bold lg:text-4xl">${item.precio}</p>
          <p className="text-justify text-lg lg:text-2xl">{item.descripcion}</p>
          <div className="card-actions justify-end">
            <Link to={'/'}>
              <button className="btn border-paleta-colorButton bg-paleta-colorButton">Volver</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )

}
export default ItemDetail