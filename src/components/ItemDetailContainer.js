import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = ({item}) => {

    const [itemDetail, setItemDetail] = useState({})

    useEffect(() => {
    
        getItem().then( result => {
            setItemDetail(result);
        })
    }, [])
    
    /* retorna la promesa que resuelve con delay de 2 segundos */
    const getItem = () => {

        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(item);
            }, 2000);
        });
    }

    return (
       
    <div>
        <ItemDetail item={itemDetail}/>
    </div>
  )
}
export default ItemDetailContainer