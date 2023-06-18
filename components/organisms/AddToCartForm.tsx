import React from "react";
import { ICraft } from "@/types";
import { useAppDispatch } from "@/hooks";
import { InputNumber, Button, Form } from "antd";
import { addToCart } from "@/features/cart/cartSlice";

interface IAddToCartFormProps {
  craft: ICraft | null;
}

const AddToCartForm: React.FC<IAddToCartFormProps> = ({ craft }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (data: any) => {
    const { quantity } = data;

    if (craft) {
      dispatch(addToCart({ ...craft, quantity }));
    }
  };

  return (
    <div>
      <p className="font-semibold text-4xl">{craft?.name}</p>
      <p className="text-sky-500 font-medium text-3xl">LKR {craft?.price}</p>
      <p className="text-gray-500 text-sm">
        {craft?.description.substring(0, 100)}
      </p>
      <Form
        onFinish={handleAddToCart}
        name="addToCarts"
        initialValues={{ quantity: 1 }}
      >
        <Form.Item name="quantity">
          <InputNumber min={1} max={craft?.stock} />
        </Form.Item>
        <Form.Item>
          <Button
            size={"large"}
            shape={"round"}
            type="primary"
            htmlType="submit"
            disabled={!craft?.stock}
          >
            Add to cart
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddToCartForm;
