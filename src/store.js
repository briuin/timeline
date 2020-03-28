import { createStore } from "redux";

const initialState = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_TIME":
      const { payload } = action;
      return {
        ...state,
        year: payload.year,
        month: payload.month
      };
    default:
      return state;
  }
}

export const storeInstance = createStore(reducer);
