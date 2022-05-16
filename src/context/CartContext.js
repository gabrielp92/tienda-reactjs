import { current } from "daisyui/src/colors";
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

  const calcularCantProductos = () => {
    return cart.reduce((cantidad, current) => cantidad + current.quantity, 0);
  }

  const subTotal = () => {
    return cart.reduce((subtotal, current) => subtotal + (current.item.precio * current.quantity), 0);
  }

  const lessQuantity = (item) => {
    const position = cart.indexOf(item);
    if(cart[position].quantity > 1)
    {
      cart[position].quantity = parseInt(cart[position].quantity) - 1;
      setCart(cart.concat([]));
    }
  }

  const moreQuantity = (item) => {
    const position = cart.indexOf(item);
    if(cart[position].quantity < cart[position].item.stock)
    {
      cart[position].quantity = parseInt(cart[position].quantity) + 1;
      setCart(cart.concat([]));
    }
  }

  const context = {
    cart,
    addItem,
    removeItem,
    clear,
    isInCart,
    calcularCantProductos,
    subTotal,
    lessQuantity,
    moreQuantity
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  )
}

export default CartContext