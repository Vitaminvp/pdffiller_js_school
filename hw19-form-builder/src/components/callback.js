import React, { Component } from "react";
import { withAuth } from "../services";
import {withRouter} from "react-router-dom";

class Callback extends Component {
  componentDidMount() {
    const { handleAuthentication, history } = this.props;
    if(handleAuthentication){
        console.log("handleAuthentication")
        handleAuthentication(history)
    }
  }

  render() {
    return <div>Loading .....................</div>;
  }
}

export default withAuth(withRouter(Callback));
