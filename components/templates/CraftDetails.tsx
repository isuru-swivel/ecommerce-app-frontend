import React from "react";
import { Image } from "antd";
import { ICraft } from "@/types";
import { AddToCartForm } from "@/components";

interface ICraftDetailsProps {
  craft: ICraft | null;
}

const CraftDetails: React.FC<ICraftDetailsProps> = ({ craft }) => {
  return (
    <div className="flex">
      <div className="basis-3/5">
        <Image src={craft?.image} alt={craft?.name} width={500} height={500} />
      </div>
      <div className="basis-2/5">
        <AddToCartForm craft={craft} />
      </div>
    </div>
  );
};

export default CraftDetails;
