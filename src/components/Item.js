import { Link } from "react-router-dom"

const Item = ({id,imgUrl,titulo,marca,precio}) => {

  return (
    <div className="card card-compact w-72 sm:w-96 md:w-80 lg:w-96 bg-base-100 shadow-xl mb-10 mx-2 grow md:grow-0 lg:h-full h-min max-h-min">
      <figure><img className="w-3/6" src={imgUrl} alt="Shoes"/></figure>
      <div className="card-body text-paleta-colorTextoCard flex items-center">
        <div className="badge badge-outline text-paleta-colorButton mb-2">{marca}</div> 
        <h2 className="card-title justify-center">{titulo}</h2>
        <p className="text-3xl font-bold leading-5">${precio}</p>
      </div>
      {/*Para mostrar la vista detalle del producto*/}
      <Link to={`/item/${id}`} className="btn btn-outline text-paleta-colorButton m-3 mt-2">Ver Detalle</Link>
    </div>
  )
}

export default Item