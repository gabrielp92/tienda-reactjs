import { Link } from "react-router-dom"

const Item = ({id,imgUrl,titulo,marca,precio}) => {

  return (
    <div className="card card-compact w-72 sm:w-96 md:w-80 lg:w-96 bg-paleta-colorFondoCard mb-12 mx-2 grow md:grow-0 lg:h-full h-min max-h-min shadow-2xl shadow-paleta-colorShadowItem">
      <figure className="overflow-hidden touch-manipulation bg-paleta-colorFondoCard"><img className="w-3/6 hover:scale-125" src={imgUrl} alt="Shoes"/></figure>
      <div className="card-body text-paleta-colorTextoCard flex items-center bg-paleta-colorFondoCard">
        <div className="badge badge-outline mb-2">{marca}</div> 
        <h2 className="card-title font-medium justify-center">{titulo}</h2>
        <p className="text-2xl font-medium text-paleta-colorNavbar leading-[.5rem]">${precio},00</p>
      </div>
      {/*Para mostrar la vista detalle del producto*/}
      <Link to={`/item/${id}`} className="btn btn-outline text-paleta-colorButton bg-paleta-colorFondoCard hover:bg-paleta-colorButtonHover m-3 mt-2">Ver Detalle</Link>
    </div>
  )
}

export default Item