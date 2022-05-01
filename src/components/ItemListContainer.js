import nb420v2 from '../images/NB-420-V2/nb420v2.jpg';
import freshfoamlazr from '../images/NB-FRESH-FOAM-LAZR/freshfoamlazr.jpg';
import nb327 from '../images/NB-327/nb327.jpg';
import sport574 from '../images/NB-574-SPORT/574sport1.jpg';
import nbx901 from '../images/NB-X90/nbx901.jpg';
import supercrossblast from '../images/SALOMON-SUPERCROSS-BLAST/supercrossblast.jpg';
import ItemList from "./ItemList";

const listaProductos = [
  {id: 1, imgUrl: nb420v2, titulo: 'NEW BALANCE NB 420 V2', marca: 'NEW BALANCE', precio: 11999, stock: 20, descripcion:'Diseñadas para el rendimiento, nuestras zapatillas de correr cuentan con una entresuela suave con una estética inspirada en Fresh Foam para una pisada cómoda y acolchada. La suela de goma y la puntera ofrecen una gran durabilidad, mientras que el revestimiento del sillín brinda estructura y soporte adicionales para ayudarte a recorrer kilómetros.'},
  {id: 2, imgUrl: freshfoamlazr, titulo: 'NEW BALANCE NB 880 V11', marca: 'NEW BALANCE', precio: 16799, stock: 30, descripcion: 'Con un diseño minimalista de tobillo bajo con un estilo de aplicación en contraste, estas zapatillas de color gris de New Balance combinan estilo y comodidad en una sola pieza. Estos zapatos con cordones tienen una plantilla acolchada para resistir los impactos. La suela de goma resistente garantiza una durabilidad excepcional.'},
  {id: 3, imgUrl: nb327, titulo: 'NEW BALANCE NB 327', marca: 'NEW BALANCE', precio: 18999, stock: 30, descripcion: 'Con una reelaboración angular de la silueta de cuña probada y verdadera, la marca "N" de gran tamaño aplicada asimétricamente y la suela exterior envolvente con tacos inspirados en los senderos, el 327 ofrece nada menos que una completa reimaginación de nuestra herencia de running.'},
  {id: 4, imgUrl: sport574, titulo: 'NEW BALANCE NB 574 SPORT', marca: 'NEW BALANCE', precio: 20199, stock: 25, descripcion: 'Las zapatillas New Balance 574 Sport se destacan por su perfil minimalista con acentos geométricos, son una versión moderna y deportiva de un clásico. Con una capellada en mesh y cuero descarne, te ayudarán a obtener tu mejor estilo deportivo. Las zapatillas New Balance 574 Sport cuentan con entresuela Fresh Foam que ofrece amortiguación y soporte ultra cómodo.'},
  {id: 5, imgUrl: supercrossblast, titulo: 'SUPERCROSS BLAST', marca: 'SALOMON', precio: 21499, stock: 20, descripcion: 'Inspirada en la legendaria SPEEDCROSS, esta zapatilla te ofrece el agarre y protección extra que necesitas para correr rápido y sin vacilar. Sea cual sea el terreno de juego y las condiciones, la SUPERCROSS BLAST te ayuda a desafiar tus límites.'},
  {id: 6, imgUrl: nbx901, titulo: 'NEW BALANCE NB X90', marca: 'NEW BALANCE', precio: 21599, stock: 35, descripcion: 'La combinación contrastante de una entresuela detallada y una capellada minimalista es una característica distintiva de la nueva serie X-90, creada para brindarle la máxima comodidad y estilo. Tejido de ingeniería y sintético. La innovadora entresuela de REVlite brinda una capacidad de respuesta y durabilidad superiores con un 30% menos de peso que otras espumas con un rendimiento comparable.'}
];

const onAdd = (suma, num) => { return suma += num; };
 
const ItemListContainer = () => {
  return (
    <div className="flex flex-auto flex-wrap justify-center">
      {/*
      
      <ItemCount stock="20" initial="1" onAdd={onAdd}/>
      */}
      <ItemList items={listaProductos}/>
    </div>
  )
}
export default ItemListContainer