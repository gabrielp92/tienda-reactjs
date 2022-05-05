import { useState } from "react";

const ItemCount = ({id, stock, initial, onAdd}) => {

  const [count, setCount] = useState(parseInt(initial));
  const [disableBtn, setDisableBtn] = useState('false');
  const [stockProd, setStock] = useState(stock);

  return (
  <div className="flex-col mt-0 pt-3 h-min">
    <div className="mb-3 text-paleta-colorTextoCard flex-row">
      <button className="btn btn-outline border-2 text-paleta-colorTextoCard text-[1rem]" onClick={() => {
        if(count == 1)
          document.getElementById(`btn${id}`).disabled = disableBtn;
        if(count >= 1) 
          if(stockProd != 0)
            setCount(onAdd(count,-1))
          else
            setCount(onAdd(count,-count))
      }}>-</button>
      <strong className="px-3 text-[1.5rem]">{count}</strong>
      <button className="btn btn-outline border-2 text-paleta-colorTextoCard text-[1rem]" onClick={() => {
      
        if(count == 0 && stockProd !=0)
          document.getElementById(`btn${id}`).disabled = !disableBtn;
        if(count < stockProd)  
          setCount(onAdd(count,1));
      }}>+</button> 
    </div>
    <div className="text-[1.25rem] mb-2">
      <label>Cant. disponible:</label>
      <strong> {stockProd}</strong>
    </div>
    <button id={`btn${id}`} className="shadow btn btn-sm md:btn-md px-3 border-paleta-fondoNavbar bg-paleta-fondoNavbar" onClick={() => {
      if(stockProd - count == 0)
        document.getElementById(`btn${id}`).disabled = disableBtn;
      if(stockProd - count >= 0)
      { 
        setStock(stockProd - count);
        setCount(onAdd(count,-count));
        document.getElementById(`btn${id}`).disabled = disableBtn;
      };
    }}>Agregar al carrito</button>
  </div>
  )
}
export default ItemCount