import { createSlice } from "@reduxjs/toolkit";
import categoryService from "../services/category.service";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    entities: [],
    isLoading: true,
    error: null,
  },
  reducers: {
    categoryRequested: (state) => {
      state.isLoading = true;
    },
    categoryReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    categoryRequestFile: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: categoryReducer, actions } = categorySlice;
const { categoryRequested, categoryReceved, categoryRequestFile } = actions;

export const loadCategoryList = () => async (dispatch) => {
  dispatch(categoryRequested());
  try {
    const data = await categoryService.get();

    dispatch(categoryReceved(data));
  } catch (error) {
    dispatch(categoryRequestFile(error.message));
  }
};

export const getCategory = () => (state) => state.category.entities;

export default categoryReducer;
