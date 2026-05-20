import React from "react";
import ReactDOM from "react-dom";
import "./Cart.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">

      <ul>

        <li>
          <div>
            <h2>Sushi</h2>
            <p>$22.99</p>
          </div>

          <div>
            <button>-</button>
            <span>2</span>
            <button>+</button>
          </div>
        </li>

        <li>
          <div>
            <h2>Burger</h2>
            <p>$12.99</p>
          </div>

          <div>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </li>

      </ul>

      <div className="total">
        <h2>Total Amount</h2>
        <h2>$58.97</h2>
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