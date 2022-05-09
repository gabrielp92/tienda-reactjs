import { useState, useEffect } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

  const [count, setCount] = useState(parseInt(initial));
  const [stockProd, setStock] = useState(stock);

  useEffect(() => {
    setStock(stock);
  }, [stock])
  
  function modifyAmount(e) {
    if (e.target.id === "increment") {
      if(count < stockProd)
        setCount(count + 1);
    } else if (e.target.id === "decrement") {
      if(count>1)  
        setCount(count - 1);
    }
  }

  return (
  <div className="flex-col mt-0 pt-3 h-min">
    <div className="mb-3 text-paleta-colorTextoCard flex-row">
      <button id="decrement" className="btn btn-outline border-2 text-paleta-colorTextoCard text-[1rem]" onClick={(event) => {
          modifyAmount(event);
      }}>-</button>
      <strong className="px-3 text-[1.5rem]">{count}</strong>
      <button id="increment" className="btn btn-outline border-2 text-paleta-colorTextoCard text-[1rem]" onClick={(event) => {
          modifyAmount(event);
      }}>+</button>
    </div>
    <div className="text-[1.25rem] mb-1">
      <label>Cant. disponible:</label>
      <strong> {stockProd}</strong>
    </div>
    <button className="shadow btn btn-sm md:btn-md px-3 border-paleta-fondoNavbar bg-paleta-fondoNavbar" onClick={() => {
      if(stockProd - count >= 0)
      { 
        setStock(stockProd - count);
        onAdd(count);
        if(stockProd === count)
          setCount(0)
      }
      if(stockProd < count)
        setCount(1)
      if(stockProd === 0)
        setCount(0)
     
    }}>Agregar al carrito</button>
  </div>
  )
}
export default ItemCount