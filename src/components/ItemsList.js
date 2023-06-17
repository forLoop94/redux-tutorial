import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "../feature/cart/cartSlice";

import Item from "./Item";

const ItemsList = () => {
  const { cartItems, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalValue = dispatch(calculateTotal);
  console.log(totalValue)

  return (
    <>
      <ul>
        {cartItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
      <h1>Total: {totalValue}</h1>
    </>
  );
};

export default ItemsList;
