import React from "react";
import { Context } from "./init";

const withHOC = Component => {
  class WithPropsHOC extends React.Component {
    static contextType = Context;

    render() {
      return <Component {...this.props} theme={this.context} />;
    }
  }

  return WithPropsHOC;
};

export default withHOC;
