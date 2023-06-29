"use client";

import { message } from "antd";
import { useEffect } from "react";
import CraftForm from "@/components/organisms/CraftForm";
import { useParams, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { editCraft, fetchCraftById } from "@/features/craft/craftSlice";
import useAuth from "@/hooks/useAuth";

const EditCraftPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = useParams();

  const { isAuthenticated, redirect } = useAuth();

  // //if user is not authenticated, redirect to login page
  if (!isAuthenticated) redirect();

  useEffect(() => {
    dispatch(fetchCraftById(id));
  }, [dispatch, id]);

  const { loading, craft } = useAppSelector((state) => state.craft);

  const handleEditCraft = async (values: any) => {
    try {
      const result = await dispatch(
        editCraft({
          id,
          payload: values,
        })
      );

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
      <CraftForm
        loading={loading}
        handleSuccess={handleEditCraft}
        craft={craft}
      />
    </div>
  );
};

export default EditCraftPage;
