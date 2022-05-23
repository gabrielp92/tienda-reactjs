import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

const SaveCompra = () => {

    const { cart, clear, subTotal} = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)

    const buyer = {
        name: 'gabriel paez',
        phone: '+5492932441606',
        email: 'gpaez1992@gmail.com' 
    }

    const sendOrder = () => { 

        const order = {
            buyer : buyer,
            items: cart,
            date: new Date(),
            total: subTotal()
        }

        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order).then(({id}) => { 
            setOrderId(id)
            clear() // se vacía el carrito
        })
       
    }

return (
    <>  
        {
            orderId != null ?
            <div className="mb-4">
                <h3 className="font-bold italic text-[1.1rem] md:text-[1.5rem] xl:text-[1.75rem] 2xl:text-[3.5rem]">Compra realizada exitosamente!</h3>
                <p className="font-normal italic text-[1.1rem] md:text-[1.5rem] xl:text-[1.75rem] 2xl:text-[3.5rem]">id compra: {orderId}</p>
                <button className="btn border-2 text-paleta-colorTextoButton font-bold px-2">
                <Link to='/'>
                    volver
                </Link>    
                </button>
            </div>
            : 
            <button onClick={sendOrder} className="btn border-2 text-paleta-colorTextoButton font-bold px-2">
                pagar
            </button>
        } 
    </>
)
  
}
export default SaveCompra