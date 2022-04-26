const Item = ({imgUrl,titulo,marca,precio}) => {
  return (
    <div className="card card-compact w-72 sm:w-96 bg-base-100 shadow-xl mb-10 mx-2 grow h-min max-h-min">
      <figure><img className="w-3/6" src={imgUrl} alt="Shoes"/></figure>
      <div className="card-body border-t border-paleta-colorBordeCard text-paleta-colorTextoCard">
        <h2 className="card-title justify-center">{titulo}</h2>
        <p className="text-3xl font-bold leading-3">${precio}</p>
        {/*<p className="text-lg">Descripción del producto</p>*/}
        <div className="card-actions justify-between items-center mt-5">
          <div className="badge badge-outline text-paleta-colorButton">{marca}</div> 
          <button className="btn btn-sm text-paleta-colorTextoButton border-paleta-colorButton bg-paleta-colorButton hover:border-paleta-colorButtonHover hover:bg-paleta-colorButtonHover">Agregar</button>
        </div>
      </div>
    </div>
  )
}
export default Item