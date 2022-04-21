import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

  const [count, setCount] = useState(1);
  const [disableBtn, setDisableBtn] = useState('false');
  const [stockProd, setStock] = useState(stock);

  return (
  <div className="flex-col m-3 mt-5 py-3 border-2 rounded-box">
    <label className="text-fuchsia-500">Producto de la tienda</label>
    <div className="mt-3 mb-3 text-primary flex-row">
      <button className="btn btn-outline btn-primary border-2 text-[2rem]" onClick={() => {
        if(count == 1)
          document.getElementById('agregarAlCarrito').disabled = disableBtn;
        if(count >= 1) 
          if(stockProd != 0)
            setCount(onAdd(count,-1))
          else
            setCount(onAdd(count,-count))
      }}>-</button>
      <strong className="px-3 text-[2rem]">{count}</strong>
      <button className="btn btn-outline btn-primary border-2 text-[2rem]" onClick={() => {
      
        if(count == 0 && stockProd !=0)
          document.getElementById('agregarAlCarrito').disabled = !disableBtn;
        if(count < stockProd)  
          setCount(onAdd(count,1));
      }}>+</button> 
    </div>
    <div>
      <label>Stock:</label>
      <strong> {stockProd}</strong>
    </div>
    <button id="agregarAlCarrito" className="shadow btn btn-sm md:btn-md lg:btn-lg btn-secondary mb-3 px-3 border-2 text-primary-content" onClick={() => {
      if(stockProd - count == 0)
        document.getElementById('agregarAlCarrito').disabled = disableBtn;
      if(stockProd - count >= 0)
      { 
        setStock(stockProd - count);
        setCount(onAdd(count,-count));
        document.getElementById('agregarAlCarrito').disabled = disableBtn;
      };
    }}>Agregar al carrito</button>
  </div>
  )
}
export default ItemCount