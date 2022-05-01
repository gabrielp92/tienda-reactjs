import Item from "./Item"
import {useEffect, useState} from "react"

const ItemList = ({items}) => {

  const [listaItems, setItems] = useState([])
 
  useEffect(() => {
          
    const promesa = new Promise( (resolve,reject) => {    
      setTimeout(() => {                
        resolve(items);    
      }, 2000);
    });

    promesa
    .then( result => {
      //promesa satisfecha
      setItems(result);
    })
    .catch( err => {
      console.log('promesa rechazada');
    });

  }, []);

  return (
    <>
      {
        listaItems.map( (item) => { return <Item key={item.id} item={item} />})
      }
    </>
  );

}

export default ItemList
