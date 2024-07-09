import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import CartItem from "./CartItem";
import {
  getCartTotal,
  clearCart,
  getCartItems,
} from "../src/redux/feature/cartSlice";

const CartContainer = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (items.lenght === 0) {
    return (
      <>
        <h3 className="fs-bold mt-4">
          {""}
          Your Shopping{""}{" "}
          <span>
            <MDBIcon fas icon="shopping-bag"></MDBIcon>
          </span>
          {""} is Empty
        </h3>
        <MDBBtn
          className="mx-2"
          onClick={() => dispatch(getCartItems())}
        ></MDBBtn>
      </>
    );
  }

  return (
    <>
      <h2 className="lead-mb-0 mt-2"> Your shopping cart</h2>
      {items.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <footer>
        <hr />
        <div>
          <h4
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginRight: "60px",
            }}
          >
            Total <span>${totalAmount}</span>
          </h4>
          <MDBBtn
            color="danger"
            style={{ width: "140px", marginTop: "50px" }}
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </MDBBtn>
        </div>
      </footer>
    </>
  );
};
export default CartContainer;
