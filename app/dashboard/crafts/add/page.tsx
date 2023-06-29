"use client";

import { message } from "antd";
import CraftForm from "@/components/organisms/CraftForm";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { addNewCraft } from "@/features/craft/craftSlice";
import useAuth from "@/hooks/useAuth";

const AddCraftPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { isAuthenticated, redirect } = useAuth();

  // //if user is not authenticated, redirect to login page
  if (!isAuthenticated) redirect();

  const { loading } = useAppSelector((state) => state.craft);

  const handleAddCraft = async (values: any) => {
    try {
      const result = await dispatch(addNewCraft(values));
      if (result?.error) {
        return message.error(result?.payload);
      }
      router.push("/dashboard/crafts");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <CraftForm loading={loading} handleSuccess={handleAddCraft} />
    </div>
  );
};

export default AddCraftPage;
