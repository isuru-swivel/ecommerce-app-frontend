import React from "react";
import { ICraft } from "@/types";
import { Card } from "antd";
import cart from "@/components/templates/Cart";

const { Meta } = Card;

interface ICraftCardProps {
  craft: ICraft;
}

const CraftCard: React.FC<ICraftCardProps> = ({ craft }) => {
  return (
    <Card
      className="mx-2"
      hoverable
      style={{ width: 360 }}
      cover={<img alt="example" src={craft.image} />}
    >
      <Meta
        title={<div className="font-semibold text-xl">{craft.name}</div>}
        description={
          <div className="font-semibold text-lg">LKR {craft.price}</div>
        }
      />
    </Card>
  );
};

export default CraftCard;
