import Item from "./Item"
import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemList = () => {

  const [listaItems, setItems] = useState([])
  const {categoryId} = useParams()
         
  useEffect(() => {

    const db = getFirestore();
    let q = undefined
    if(categoryId === undefined)
      q = collection(db,'items')
    else
      q = query( collection(db,'items'), where('category','==', categoryId))

    getDocs(q).then((snapshot) => {   
      
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
        listaItems.map( (item) => { 
          return (
            <Item key={item.id} {...item}/>
          )
        })
      }
    </>
  );
}

export default ItemList
