import React from "react";
import ReactDOM from "react-dom";
import "./Cart.css";

const Backdrop = () => {
  return <div className="backdrop"></div>;
};

const ModalOverlay = () => {
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
        <button>Close</button>
        <button>Order</button>
      </div>

    </div>
  );
};

function Cart() {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("overlays")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("overlays")
      )}
    </>
  );
}

export default Cart;