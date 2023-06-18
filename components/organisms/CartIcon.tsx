import React, { useState } from "react";
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useAppSelector } from "@/hooks";

const CartIcon = () => {
  const { cartItems, totalPrice } = useAppSelector((state) => state.cart);

  return (
    <div className="flex items-center justify-end">
      <div>
        <Badge count={cartItems.length} color={"blue"} showZero>
          <ShoppingCartOutlined style={{ fontSize: 35 }} />
        </Badge>
      </div>
      <div className="ml-3">LKR {totalPrice}</div>
    </div>
  );
};

export default CartIcon;
