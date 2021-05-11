import { SAVE_DATA, DELETE_DATA, UPDATE_DATA } from "./actions";
import users from "../config/userInfo";

const initialState = {
  users: users,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DATA:
      console.log("action.payload>>>", action.payload);

      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case DELETE_DATA:
      return {
        ...state,
        users: state.users.filter((item) => {
          return item.name !== action.payload;
        }),
      };

    case UPDATE_DATA:
      const result = state.users.find(
        (item) => item.name === action.payload.name
      );

      result.email = action.payload.email;
      result.age = action.payload.age;
      result.contact_no = action.payload.contact_no;
      console.log("state.users>>>", state.users);
      return {
        ...state,
      };

    default:
      return { ...state };
  }
};
export default user;
