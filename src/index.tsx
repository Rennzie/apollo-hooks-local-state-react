import * as React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Button } from "@material-ui/core";

import AppNavigation from "./AppNavigation";
import { useNavLocationState, useNavLocationDispatch } from "./useNavLocation";

const client = new ApolloClient({
  clientState: {
    defaults: {
      navLocation: "home"
    }
    // resolvers: [],
    //typeDefs
  }
});

function App() {
  const { navLocation } = useNavLocationState();
  const updateNavLocation = useNavLocationDispatch();

  console.log("current location", navLocation);

  return (
    <AppNavigation>
      <Button
        onClick={() =>
          updateNavLocation({ type: "nextLocation", nextLocation: "home" })
        }
        variant="contained"
        color="secondary"
      >
        Home
      </Button>
      <Button
        onClick={() =>
          updateNavLocation({ type: "nextLocation", nextLocation: "map" })
        }
        variant="contained"
        color="primary"
      >
        Map
      </Button>
    </AppNavigation>
  );
}

const rootElement = document.getElementById("root");
render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);
