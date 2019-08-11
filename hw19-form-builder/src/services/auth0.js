import auth0 from "auth0-js";

class Auth0 {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: "dev-89anh0xa.eu.auth0.com",
      clientID: "ytWgl3QewGPM7B0zGYjnbMYQiHMCqSY6",
      redirectUri: "http://localhost:8080/callback",
      responseType: "token id_token",
      scope: "openid profile"
    });
    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }
  login() {
    this.auth0.authorize();
  }
  handleAuthentication() {
      this.auth0.parseHash((error, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
        } else if (error) {
          console.log(error);
        }
      });
  };
  setSession(authResult) {
    const expiresAt = JSON.stringify(
        authResult.expiresIn * 1000 + new Date().getTime()
    );

    Cookies.set('jwt', authResult.idToken);
  };
}

const auth0Client = new Auth0();

export default auth0Client;
