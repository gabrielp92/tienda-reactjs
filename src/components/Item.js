import { Link } from "react-router-dom"

const Item = ({id,imgUrl,titulo,marca,precio,stock,descripcion}) => {

  return (
    <div className="card card-compact w-72 sm:w-96 bg-base-100 shadow-xl mb-10 mx-2 grow h-min max-h-min">
      <figure><img className="w-3/6" src={imgUrl} alt="Shoes"/></figure>
      <div className="card-body border-t border-paleta-colorBordeCard text-paleta-colorTextoCard">
        <h2 className="card-title justify-center">{titulo}</h2>
        <p className="text-3xl font-bold leading-3">${precio}</p>
        {/*Para mostrar la vista detalle del producto*/}
        <Link to={`/item/${id}`} className="btn btn-outline mt-4 text-paleta-colorButton">Ver Detalle</Link>
        <div className="card-actions justify-between items-center mt-5">
          <div className="badge badge-outline text-paleta-colorButton">{marca}</div> 
          <button className="btn btn-sm text-paleta-colorTextoButton border-paleta-colorButton bg-paleta-colorButton hover:border-paleta-colorButtonHover hover:bg-paleta-colorButtonHover">Agregar</button>
        </div>
      </div>
    </div>
  )
}

export default Item