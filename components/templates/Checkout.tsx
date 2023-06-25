import { message } from "antd";
import { useRouter } from "next/navigation";
import { clearCart } from "@/features/cart/cartSlice";
import { addOrder } from "@/features/order/orderSlice";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { CheckoutForm, OrderDetailsCard } from "@/components";

const Checkout = () => {
  const router = useRouter();
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

    dispatch(addOrder(payload))
      .then((result) => {
        if (result.meta.requestStatus === "fulfilled") {
          dispatch(clearCart());
          router.replace("/order/success");
        } else {
          return message.error(result.payload);
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
