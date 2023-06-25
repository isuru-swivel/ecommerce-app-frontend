import { OrderStats, CraftSoldCountList } from "@/components";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { useEffect } from "react";
import { getAnalytics } from "@/features/order/orderSlice";

const Analytics = () => {
  const dispatch = useAppDispatch();
  const { analytics } = useAppSelector((state) => state.order);

  const {
    totalSales,
    totalCraftsSold,
    totalOrders,
    craftsSoldCount,
    topFiveCraftsSold,
  } = analytics;

  useEffect(() => {
    dispatch(getAnalytics());
  }, [dispatch]);

  return (
    <div>
      <OrderStats
        totalSales={totalSales}
        totalOrders={totalOrders}
        totalSoldCrafts={totalCraftsSold}
      />

      <div className="grid grid-cols-2 mt-4">
        <div className="flex justify-center">
          <CraftSoldCountList
            title="Top 5 best-selling crafts"
            items={topFiveCraftsSold}
          />
        </div>
        <div className="flex justify-center">
          <CraftSoldCountList
            title="The count of all crafts sold"
            items={craftsSoldCount}
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
