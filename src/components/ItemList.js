import Item from "./Item"
import {useEffect, useState} from "react"
import { productList } from './Productos';

const ItemList = () => {

  const [listaItems, setItems] = useState([])
          
  const promesa = new Promise( (resolve,reject) => {    
      setTimeout(() => {                
        resolve(productList);    
      }, 2000);
    });

    const obtenerProductos = async () => {
      try {
        const result = await promesa;
        setItems(result);
      } catch (error) {
        console.log(error + 'No se pueden mostrar los productos');
      }
    };

  useEffect(() => {
    obtenerProductos();
  }, [])
  
  return (
    <>
      {
        listaItems.map( (item) => { 
          return (
            <Item 
              key={item.id}
              id={item.id}
              imgUrl={item.imgUrl}
              titulo={item.titulo}
              marca={item.marca}
              precio={item.precio}
              stock={item.stock}
              descripcion={item.descripcion}
            />
          )
        })
      }
    </>
  );
}

export default ItemList
