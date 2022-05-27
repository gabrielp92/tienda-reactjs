import ItemList from "./ItemList";
import Hero from './Hero';
 
const ItemListContainer = () => {
  return (
    <div className="flex flex-auto flex-wrap justify-center">
      <Hero/>
      <ItemList/>
    </div>
  )
}
export default ItemListContainer