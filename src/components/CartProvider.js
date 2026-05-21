import {useState} from 'react'
import CartContext from './CartContext';

function CartProvider(props) {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const addItemHandler = (item) => {
    const existItem =
      cartItems.find(
        (items) => items.id === item.id
      );

    if (existItem) {

        setCartItems((prev) =>
          prev.map((items) =>
            items.id === item.id
              ? {
                  ...items,
                  amount:
                    items.amount +
                    item.amount
                }
              : items
          )
        );

    } else {

        setCartItems((prev) => [
          ...prev,
          item
        ]);

    }

    setTotalAmount(
      (prev) =>
        prev +
        item.price *
        item.amount
    );
}

    const removeItemHandler = (id) => {
        const existing = cartItems.find((item) => item.id === id);
        if(existing){
            setCartItems((prev) => prev.filter((item) => item.id !== id));
            setTotalAmount((prev) => prev - existing.price * existing.amount);
        }
    }

  return (
    <CartContext.Provider
    value={{
    items: cartItems,
    totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler
    }}
    >
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider