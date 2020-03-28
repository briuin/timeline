import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Timeline from "./page/timeline.js";
import { Provider } from "react-redux";

export default class Root extends React.Component {
  state = {
    hasError: false,
    store: this.props.store,
    globalEventDistributor: this.props.globalEventDistributor
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <div>Error</div>
    ) : (
      <div className="mt-16">
        <Provider store={this.state.store}>
          <BrowserRouter>
            <Route
              path="/"
              render={props => <Timeline {...props} {...this.props} />}
            />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}
