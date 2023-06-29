"use client";

import { message } from "antd";
import CraftForm from "@/components/organisms/CraftForm";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { addNewCraft } from "@/features/craft/craftSlice";

const AddCraftPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { loading } = useAppSelector((state) => state.craft);

  const handleAddCraft = (values: any) => {
    dispatch(addNewCraft(values)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        router.push("/dashboard/crafts");
      } else {
        message.error(result.payload);
      }
    });
  };

  return (
    <div>
      <CraftForm loading={loading} handleSuccess={handleAddCraft} />
    </div>
  );
};

export default AddCraftPage;
