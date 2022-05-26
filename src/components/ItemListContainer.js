import ItemList from "./ItemList";
import Header from './Header';
 
const ItemListContainer = () => {
  return (
    <div className="flex flex-auto flex-wrap justify-center">
      <Header/>
      <ItemList/>
    </div>
  )
}
export default ItemListContainer