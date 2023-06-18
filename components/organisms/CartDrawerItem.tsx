import React from "react";
import { Card } from "antd";
import { ICartItem } from "@/types";
import { CloseCircleOutlined } from "@ant-design/icons";

const { Meta } = Card;

interface ICartDrawerItemProps {
  item: ICartItem;
  removeItem: (id: string) => void;
}

const CartDrawerItem: React.FC<ICartDrawerItemProps> = ({
  item,
  removeItem,
}) => {
  return (
    <Card
      className="flex items-center"
      hoverable
      style={{ width: "100%" }}
      cover={<img alt="example" src={item.image} />}
      extra={
        <CloseCircleOutlined
          className="drawer-card-item-close"
          onClick={() => removeItem(item._id)}
        />
      }
    >
      <Meta
        title={item.name}
        description={`LKR ${item.price} x ${item.quantity}`}
      />
    </Card>
  );
};

export default CartDrawerItem;
