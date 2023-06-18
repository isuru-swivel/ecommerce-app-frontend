"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { CraftDetails, CartDrawer } from "@/components";
const { fetchCraftById } = require("@/features/craft/craftSlice");

const Craft = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const [showDrawer, setShowDrawer] = useState(false);

  const { craft } = useAppSelector((state) => state.craft);
  const { cartItems, totalPrice } = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCraftById(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (cartItems.length > 0) setShowDrawer(true);
  }, [cartItems]);

  const handleDrawerClose = () => {
    setShowDrawer(false);
  };

  return (
    <>
      <CraftDetails craft={craft} />
      <CartDrawer
        open={showDrawer}
        cartItems={cartItems}
        totalPrice={totalPrice}
        onClose={handleDrawerClose}
      />
    </>
  );
};

export default Craft;
