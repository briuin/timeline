import React, { useReducer, useEffect } from "react";
import { get } from "lodash";

export default function TimelinePage(props) {
  const initialState = {
    timelines: []
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "getTimelines" });
  }, []);
  const { timelines } = state;
  const { pathname } = props.location;
  const regexSearch = /[0-9]+/.exec(pathname);
  const selected = get(regexSearch, "[0]");

  return (
    <div>
      <div className="flex">
        <div className="p-6 w-1/3">
          {timelines[0].year} - {timelines[0].month}
        </div>
      </div>
    </div>
  );
}

function reducer(state, action) {
  const newState = { ...state };
  switch (action.type) {
    case "getTimelines":
      newState.timelines = [
        {
          year: 2020,
          month: 3
        }
      ];
      return newState;
    default:
      return state;
  }
}
