import { axios } from "@/api";
import { IOrderState } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: IOrderState = {
  loading: false,
  error: null,
};

export const addOrder = createAsyncThunk(
  "order/addOrder",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/orders", payload);
      return data;
    } catch (e: any) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //add order
    builder
      .addCase(addOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.loading = false;
        // @ts-ignore
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
