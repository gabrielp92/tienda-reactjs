import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Spinner from "./Spinner"
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const {itemId} = useParams()

    const [itemDetail, setItemDetail] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const db = getFirestore();
        const documento = doc(db,'items',itemId);

        getDoc(documento).then( (snapshot) => {
               
            if(snapshot.exists())
            {
                setItemDetail({id: snapshot.id, ...snapshot.data()})
                setLoading(false)
            }
        })
    }, [itemId])

    return (
    <>
        {loading ? <Spinner/> : <ItemDetail item={itemDetail}/> }
    </>
  )
}
export default ItemDetailContainer