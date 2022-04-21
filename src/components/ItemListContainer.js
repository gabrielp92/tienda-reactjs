import ItemCount from "./ItemCount"

const onAdd = (suma, num) => { return suma += num; };
 
const ItemListContainer = ({greeting}) => {
  return (
    <div className="flex-col">
      <div>
        {greeting}
      </div>
      <ItemCount stock="20" initial="1" onAdd={onAdd}/>
    </div>
  )
}
export default ItemListContainer