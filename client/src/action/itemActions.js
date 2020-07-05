import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./type";
import axios from "axios";

export const getItems = () => (dispatch) => {
  dispatch(setItemsLoading(true));
  axios.get("/api/items").then((res) =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data,
    })
  );
};
export const addItem = (item) => (dispatch) => {
  dispatch(setItemsLoading(true));
  axios.post("/api/items", item).then((res) =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data,
    })
  );
};
export const deleteItem = (id) => (dispatch) => {
  dispatch(setItemsLoading(true));
  axios.delete(`/api/items/${id}`).then((res) =>
    dispatch({
      type: DELETE_ITEM,
      payload: id,
    })
  );
};
export const setItemsLoading = (item) => {
  return {
    type: ITEMS_LOADING,
  };
};
