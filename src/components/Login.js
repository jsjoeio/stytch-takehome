import React from "react";
import { StytchLogin } from "@stytch/react";
import { Products } from "@stytch/vanilla-js";
import Header from "./Header";

/*
Login configures and renders the StytchLogin component which is a prebuilt UI component for auth powered by Stytch

This component accepts style, config, and callbacks props. To learn more about possible options review the documentation at
https://stytch.com/docs/sdks/javascript-sdk#ui-configs
*/
const Login = () => {
  const styles = {
    hideHeaderText: true,
    container: {
      width: "100%",
    },
    buttons: {
      primary: {
        backgroundColor: "#000",
        borderColor: "#000",
      },
    },
  };
  const config = {
    products: [Products.emailMagicLinks],
    emailMagicLinksOptions: {
      loginRedirectURL:
        "https://3000--dev--joe--jsjoeio--apps.dev.coder.com/authenticate",
      loginExpirationMinutes: 60,
      signupRedirectURL:
        "https://3000--dev--joe--jsjoeio--apps.dev.coder.com/authenticate",
      signupExpirationMinutes: 60,
    },
  };

  return (
    <>
      <StytchLogin config={config} styles={styles} />
    </>
  );
};

export default Login;
