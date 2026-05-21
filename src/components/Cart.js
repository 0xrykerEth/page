import React from "react";
import ReactDOM from "react-dom";
import "./Cart.css";
import CartContext from "./CartContext";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  const cartCtx = React.useContext(CartContext);
  return (
    <div className="modal">
      <div className="cart-items">
        {cartCtx.items.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)} x {item.amount}</p>
          </div>
        ))}
      </div>

      <div className="total">
        <h2>Total Amount</h2>
        <h2>${cartCtx.totalAmount.toFixed(2)}</h2>
      </div>

      <div className="actions">
        <button onClick={props.onClose}>Close</button>
        <button>Order</button>
      </div>

    </div>
  );
};

function Cart(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose}  />,
        document.getElementById("overlays")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        document.getElementById("overlays")
      )}
    </>
  );
}

export default Cart;