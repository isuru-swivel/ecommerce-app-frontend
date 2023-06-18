import { CheckoutForm, OrderDetailsCard } from "@/components";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { addOrder } from "@/features/order/orderSlice";

const Checkout = () => {
  const dispatch = useAppDispatch();
  const { cartItems, totalPrice } = useAppSelector((state) => state.cart);

  const handleCheckout = (data: any) => {
    const orderItems = cartItems.map((item) => {
      return {
        craft: item._id,
        quantity: item.quantity,
      };
    });

    const payload = {
      ...data,
      orderTotal: totalPrice,
      orderItems,
    };

    dispatch(addOrder(payload));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <OrderDetailsCard items={cartItems} totalPrice={totalPrice} />
      </div>
      <div>
        <CheckoutForm handleFormSubmit={handleCheckout} />
      </div>
    </div>
  );
};

export default Checkout;
