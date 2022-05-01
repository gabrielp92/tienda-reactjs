const ItemDetail = ({item}) => {
  return (
    <>
        <label htmlFor={item.id} className="btn btn-outline modal-button mt-4 text-paleta-colorButton">Ver Detalle</label>

        <input type="checkbox" id={item.id} class="modal-toggle"/>
        <div className="modal modal-middle md:w-auto overflow-y-auto my-1 mx-2">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="w-3/6 lg:w-auto" src={item.imgUrl} alt="Shoes"/></figure>
            <div className="card-body md:m-4">
              <h2 className="font-bold text-lg lg:text-3xl">{item.titulo}</h2>
              <p className="lg:text-2xl">${item.precio}</p>
              <p className="text-justify lg:text-2xl">{item.descripcion}</p>
              <div className="modal-action md:m-0">
                <label htmlFor={item.id} className="btn btn-outline">Cerrar</label>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
export default ItemDetail