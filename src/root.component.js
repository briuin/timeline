import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Timelines from "./page/timeline.js";

export default class Root extends React.Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <div>Error</div>
    ) : (
      <div className="mt-16">
        <BrowserRouter>
          <Route path="/" component={Timelines} />
        </BrowserRouter>
      </div>
    );
  }
}
