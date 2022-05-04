import ItemList from "./ItemList";

const onAdd = (suma, num) => { return suma += num; };
 
const ItemListContainer = () => {
  return (
    <div className="flex flex-auto flex-wrap justify-center">
      <ItemList/>
    </div>
  )
}
export default ItemListContainer