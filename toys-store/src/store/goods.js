import { createSlice } from "@reduxjs/toolkit";
import goodsService from "../services/goods.services";

const goodsSlice = createSlice({
  name: "goods",
  initialState: {
    entities: [],
    isLoading: true,
    error: null,
  },
  reducers: {
    goodsRequested: (state) => {
      state.isLoading = true;
    },
    goodsReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    goodsRequestFile: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: goodsReducer, actions } = goodsSlice;
const { goodsRequested, goodsReceved, goodsRequestFile } = actions;

export const loadGoodsList = () => async (dispatch) => {
  dispatch(goodsRequested());
  try {
    const data = await goodsService.get();
    dispatch(goodsReceved(data));
  } catch (error) {
    dispatch(goodsRequestFile(error.message));
  }
};

export const getGoods = () => (state) => state.goods.entities;
export const getGoodsById = (goodsId) => (state) => {
  if (state.goods.entities) {
  }
  return state.goods.entities.find((g) => g.id === goodsId);
};

export default goodsReducer;
