import React from "react";
import { withAuth } from "../services";
import { Button, Container } from "@material-ui/core";

const Login = withAuth(({ isAuthorized, authorize }) => {
  return isAuthorized ? (
    <Container
      maxWidth="sm"
      style={{
        background: "#eaeaea",
        padding: 20,
        borderRadius: 5,
        textAlign: "center",
        marginTop: 50
      }}
    >
      <Button
        variant="contained"
        size="medium"
        color="primary"
        // onClick={authorize}
      >
        Logout
      </Button>
    </Container>
  ) : (
    <Container
      maxWidth="sm"
      style={{
        background: "#eaeaea",
        padding: 20,
        borderRadius: 5,
        textAlign: "center",
        marginTop: 50
      }}
    >
      <Button
        variant="contained"
        size="medium"
        color="primary"
        onClick={authorize}
      >
        Login
      </Button>
    </Container>
  );

  // return isAuthorized ? (
  //   <Redirect to="/" />
  // ) : (
  //   <>
  //     <div>Please login</div>
  //     <button onClick={authorize}>Login</button>
  //   </>
  // );
});

export default Login;
