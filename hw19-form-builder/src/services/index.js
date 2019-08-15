import React, { Component } from "react";
import auth0 from "auth0-js";
import Cookies from "js-cookie";

const { Provider, Consumer: AuthConsumer } = React.createContext({
  isAuthorized: false
});

class AuthProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { isAuthorized: false };
    this.authorize = this.authorize.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.auth0 = new auth0.WebAuth({
      domain: "dev-89anh0xa.eu.auth0.com",
      clientID: "ytWgl3QewGPM7B0zGYjnbMYQiHMCqSY6",
      redirectUri: "http://localhost:8080/callback",
      responseType: "token id_token",
      scope: "openid profile"
    });
  }

  authorize() {
    this.auth0.authorize();
  }
  logout(history) {
    this.setState({ isAuthorized: false }, () => {
      //
    });
    Cookies.remove('user');
    Cookies.remove('jwt');
    Cookies.remove('expiresAt');

    this.auth0.logout({
      returnTo: "",
      clientID: "ytWgl3QewGPM7B0zGYjnbMYQiHMCqSY6"
    })

    history.push("/");
  }
  handleAuthentication(history) {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setState({ isAuthorized: true }, () => {
          this.setSession(authResult)
          history.push("/");
        });
      } else if (err) {
        console.log(err);
      }
    });
  }

  isAuthenticated() {
    const expiresAt = Cookies.getJSON("expiresAt");
    return new Date().getTime() < expiresAt
  }

  setSession(authResult) {
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

    Cookies.set('user', authResult.idTokenPayload);
    Cookies.set('jwt', authResult.idToken);
    Cookies.set('expiresAt', expiresAt);

    // history.replace("/");
  }

  render() {
    // const { isAuthorized } = this.state;
    return (
      <Provider
        value={{
          isAuthorized: this.isAuthenticated,
          authorize: this.authorize,
          handleAuthentication: this.handleAuthentication,
          logout: this.logout
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export function withAuth(Component) {
  return class AuthHOC extends React.Component {
    render() {
      return (
        <AuthConsumer>
          {contextProps => <Component {...contextProps} {...this.props} />}
        </AuthConsumer>
      );
    }
  };
}

export default AuthProvider;
