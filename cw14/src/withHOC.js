import React from "react";
import { Context } from "./init";

const withHOC = Component => {
  class WithDelayHOC extends React.Component {
    static contextType = Context;

    render() {
      return <Component {...this.props} myStyle={this.context} />;
    }
  }

  return WithDelayHOC;
};

export default withHOC;
