import nb420v2 from '../images/NB-420-V2/nb420v2.jpg';
import freshfoamlazr from '../images/NB-FRESH-FOAM-LAZR/freshfoamlazr.jpg';
import nb327 from '../images/NB-327/nb327.jpg';
import sport574 from '../images/NB-574-SPORT/574sport1.jpg';
import nbx901 from '../images/NB-X90/nbx901.jpg';
import supercrossblast from '../images/SALOMON-SUPERCROSS-BLAST/supercrossblast.jpg';
import ItemList from "./ItemList";

const listaProductos = [
  {id: 1, imgUrl: nb420v2, titulo: 'NEW BALANCE NB 420 V2', marca: 'NEW BALANCE', precio: 10599, stock: 20},
  {id: 2, imgUrl: freshfoamlazr, titulo: 'NEW BALANCE NB 880 V11', marca: 'NEW BALANCE', precio: 15299, stock: 30},
  {id: 3, imgUrl: nb327, titulo: 'NEW BALANCE NB 327', marca: 'NEW BALANCE', precio: 17049, stock: 30},
  {id: 4, imgUrl: sport574, titulo: 'NEW BALANCE NB 574 SPORT', marca: 'NEW BALANCE', precio: 18399, stock: 25},
  {id: 5, imgUrl: nbx901, titulo: 'NEW BALANCE NB X90', marca: 'NEW BALANCE', precio: 19599, stock: 35},
  {id: 6, imgUrl: supercrossblast, titulo: 'SUPERCROSS BLAST', marca: 'SALOMON', precio: 20699, stock: 20}
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