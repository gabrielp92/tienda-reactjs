import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { productList } from './Productos';

const ItemDetailContainer = () => {

    const {itemId} = useParams()

    const [itemDetail, setItemDetail] = useState({})

    useEffect(() => {
        getItem().then( result => {
            setItemDetail(result.find( p => p.id == itemId ));
        })
    }, [itemId])

    /* retorna la promesa que resuelve con delay de 2 segundos */
    const getItem = () => {

        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(productList);
            }, 2000);
        });
    }

    return (
    <>
        <ItemDetail item={itemDetail}/> 
    </>
  )
}
export default ItemDetailContainer