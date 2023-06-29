"use client";

import { message } from "antd";
import { useEffect } from "react";
import CraftForm from "@/components/organisms/CraftForm";
import { useParams, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { editCraft, fetchCraftById } from "@/features/craft/craftSlice";

const EditCraftPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCraftById(id));
  }, [dispatch, id]);

  const { loading, craft } = useAppSelector((state) => state.craft);

  const handleEditCraft = (values: any) => {
    dispatch(
      editCraft({
        id,
        payload: values,
      })
    ).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        router.push("/dashboard/crafts");
      } else {
        message.error(result.payload);
      }
    });
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
