import Item from "./Item"
import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemList = () => {

  const [listaItems, setItems] = useState([])
  const {categoryId} = useParams()
         
  useEffect(() => {

    const db = getFirestore();
    const itemsCollection = collection(db,'items')
    getDocs(itemsCollection).then((snapshot) => {   
      
      if(snapshot.size !== 0)
      {
        const listaAux = []
        snapshot.docs.map((documento) => { listaAux.push( {id:documento.id, ...documento.data()} ) })
        setItems(listaAux.sort(function(a,b){return a.precio-b.precio})) //por defecto ordeno por precio, de menor a mayor 
      }
    });
  }, [categoryId]);
  
  return (
    <>
      {
        listaItems.filter((i) => { return (i.category === categoryId) || (categoryId === undefined)}).map( (item) => { 
          return (
            <Item 
              key={item.id}
              id={item.id}
              titulo={item.titulo}
              marca={item.marca}
              precio={item.precio}
              stock={item.stock}
              descripcion={item.descripcion}
              imgUrl={item.imgUrl}
            />
          )
        })
      }
    </>
  );
}

export default ItemList
