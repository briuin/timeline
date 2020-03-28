import React from "react";
import { connect } from "react-redux";

function TimelinePage(props) {
  const state = props.store.getState().reducer;
  const { selectedTimeline, timelines } = state;

  const timelinesElement = timelines.map(x => (
    <span key={`${x.year}-${x.month}`}>
      {x.year} - {x.month}, selected: {selectedTimeline.year} -{" "}
      {selectedTimeline.month}
    </span>
  ));
  return (
    <div className="flex">
      <div className="p-6 w-1/3">{timelinesElement}</div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    selectedTimeline: state.reducer.selectedTimeline
  };
}

export default connect(mapStateToProps)(TimelinePage);
