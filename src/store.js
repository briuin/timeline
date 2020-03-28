import { createStore, combineReducers } from "redux";
import { Timeline } from "./entities/timeline";

const initialState = {
  selectedTimeline: new Timeline(
    new Date().getFullYear(),
    new Date().getMonth() + 1
  ),
  timelines: [new Timeline(new Date().getFullYear(), new Date().getMonth() + 1)]
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

export const storeInstance = createStore(
  combineReducers({ namespace: () => "timeline", reducer })
);
