import { toast } from "react-toastify";

export const SAVE_DATA = "SAVE_DATA";
export const DELETE_DATA = "DELETE_DATA";
export const UPDATE_DATA = "UPDATE_DATA";

export const saveData = (data) => {
  return {
    type: "SAVE_DATA",
    payload: data,
  };
};

export const updateData = (data) => {
  return {
    type: "UPDATE_DATA",
    payload: data,
  };
};

export const deleteData = (data) => {
  console.log("data>>.", data);
  return {
    type: "DELETE_DATA",
    payload: data,
  };
};
