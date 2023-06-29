"use client";

import OrdersTable from "@/components/organisms/OrdersTable";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect } from "react";
import { getAllOrders } from "@/features/order/orderSlice";
import useAuth from "@/hooks/useAuth";

const OrdersPage = () => {
  const dispatch = useAppDispatch();

  const { isAuthenticated, redirect } = useAuth();

  // //if user is not authenticated, redirect to login page
  if (!isAuthenticated) redirect();

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const { orders, loading } = useAppSelector((state) => state.order);

  return (
    <>
      <OrdersTable orders={orders} loading={loading} />
    </>
  );
};

export default OrdersPage;
