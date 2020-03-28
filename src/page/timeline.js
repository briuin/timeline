import React from "react";
import { get } from "lodash";

export default function TimelinePage(props) {
  const state = props.store.getState().reducer;
  const { selectedTimeline, timelines } = state;

  const timelinesElement = timelines.map(x => (
    <span key={`${x.year}-${x.month}`}>
      {x.year} - {x.month}
    </span>
  ));
  return (
    <div>
      <div className="flex">
        <div className="p-6 w-1/3">{timelinesElement}</div>
      </div>
    </div>
  );
}
