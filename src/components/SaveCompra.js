import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

const SaveCompra = () => {

    const { cart, clear, subTotal} = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)

    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [verifCorreo, setVerifCorreo] = useState('')
    const [mensajeVerifCorreo, setMensajeVerifCorreo] = useState('')
    const [styleBtnPagar, setStyleBtnPagar] = useState('btn btn-primary btn-disabled')
    const [styleInputVerifCorreo, setStyleInputVerifCorreo] = useState('form-control hidden')

    const buyer = {
        name: nombre,
        phone: telefono,
        email: correo
    }

    const expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

    const esCorreo = () => {
        if(expr.test(correo))
            setStyleInputVerifCorreo('form-control')
        else
            setStyleInputVerifCorreo('form-control hidden')
        return expr.test(correo)
    }

    const correoValido = () => {
        if(correo !== verifCorreo)
            setMensajeVerifCorreo('correo mal ingresado')
        else
            setMensajeVerifCorreo('')
    }

    const camposValidos = () => {

        if(esCorreo() && (correo === verifCorreo) && (nombre !== '') && (telefono !== '') && (correo !== ''))
            setStyleBtnPagar('btn btn-primary btn-accent')
        else
            setStyleBtnPagar('btn btn-primary btn-disabled')
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
            clear() // se vac??a el carrito
        })
    }

return (
    <div className="mt-20 sm:mt-24">  
        {
            orderId != null ?
            <div className="mt-32">
                <h3 className="font-bold italic text-[1.1rem] md:text-[1.5rem] xl:text-[1.75rem] 2xl:text-[3.5rem]">??Compra realizada exitosamente!</h3>
                <p className="font-normal italic text-[1.1rem] md:text-[1.5rem] xl:text-[1.75rem] 2xl:text-[3.5rem]">id compra: {orderId}</p>
                <button className="btn font-bold mt-6 px-2 bg-paleta-colorNavbar border-paleta-colorNavbar hover:bg-paleta-colorButton">
                <Link to='/'>
                    volver
                </Link>    
                </button>
            </div>
            : 
            <div className="hero min-h-screen bg-paleta-colorFondoForm mt-[-3.5rem] mb-8 text-paleta-colorTextoCard shadow-2xl shadow-paleta-colorShadowItem">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold">Complet?? el formulario</h1>
                        <p className="py-6 text-xl md:text-3xl">Para finalizar la compra primero debe completar este formulario con sus datos de contacto.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-paleta-colorFondoCard">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Nombre y apellido</span>
                                </label>
                                <input type="text" placeholder="Nombre y apellido" className="input input-bordered" onChange={
                                    event => { 
                                        setNombre(event.target.value)
                                        camposValidos()
                                    }  
                                } 
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Tel??fono</span>
                                </label>
                                <input type="text" placeholder="Tel??fono" className="input input-bordered" onChange={
                                    event => { 
                                        setTelefono(event.target.value) 
                                        camposValidos()
                                    }          
                                }
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Correo</span>
                                </label>
                                <input type="text" placeholder="Correo electr??nico" className="input input-bordered" onChange={
                                    event => { 
                                        setCorreo(event.target.value) 
                                        camposValidos()
                                    }
                                }                                
                                />
                            </div>
                            { 
                                expr.test(correo) ? 
                                <div className={styleInputVerifCorreo}>
                                    <label className="label">
                                        <span className="label-text">Verificar Correo</span>
                                    </label>
                                    <input type="text" placeholder="Ingrese nuevamente el correo electr??nico" className="input input-bordered"
                                    onChange={
                                        event => { 
                                            setVerifCorreo(event.target.value)
                                            correoValido()
                                            camposValidos()
                                        }
                                    }
                                    onBlur={
                                        event => { 
                                            setVerifCorreo(event.target.value)
                                            correoValido()
                                            camposValidos()  
                                        }
                                    }  
                                    onFocus={
                                        event => { 
                                            setVerifCorreo(event.target.value)
                                            correoValido()
                                            camposValidos()
                                        }
                                    }
                                    onClick={
                                        event => {      
                                            setVerifCorreo(event.target.value)
                                            correoValido()
                                            camposValidos()                          
                                        }
                                    }                          
                                    />
                                    <div className="text-left text-[1rem] text-paleta-colorNavbar">{mensajeVerifCorreo}</div>
                                </div>
                                :
                                <div></div>
                            }
                            <div className="form-control mt-6">
                                <button className={styleBtnPagar} onClick={sendOrder}>pagar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        } 
    </div>
)
  
}
export default SaveCompra