import { createContext, useEffect, useState } from "react"

export const CartContext = createContext({
  cart: [],
});

export const CartContextProvider = ( {children} ) => {

  const [cart, setCart] = useState([])

  // agrega la cantidad quantity de item al carrito
  const addItem = (item,quantity) => {

    setCart( (currentCart) => {

      const itemFinded = currentCart.find( i => i.item.id === item.id )
      if(itemFinded === undefined) 
        return currentCart.concat({item:item,quantity:quantity}) 
      else
      { // si el item ya se encuentra solamente aumento su cantidad
        itemFinded.quantity += quantity
        return currentCart;
      }
    }
    );
  }

  // Remueve el item del cart que tenda el id itemId
  const removeItem = (itemId) => {
    setCart((currentCart) => { return currentCart.filter ( i => i.item.id !== itemId);
    });
  };
    
  // Remueve todos los items
  const clear = () => {
    setCart([]);
  }

  //Retorna true si el item con id está en el Carrito. False en caso contrario.
  const isInCart = (id) => {
     return cart.some( i => i.item.id === id)
  }

  const context = {
    cart,
    addItem,
    removeItem,
    clear,
    isInCart
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  )
}

export default CartContext