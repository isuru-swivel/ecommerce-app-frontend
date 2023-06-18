import { CartItems, CartTotalPriceCard } from "@/components";
import { useAppSelector } from "@/hooks";

const Cart = () => {
  const { cartItems, totalPrice } = useAppSelector((state) => state.cart);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[70%,30%] sm:grid-cols-[70%,30%] gap-4">
      <div>
        <CartItems items={cartItems} />
      </div>
      <div>
        <CartTotalPriceCard totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default Cart;
