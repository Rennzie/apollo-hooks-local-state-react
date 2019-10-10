import * as React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Button } from "@material-ui/core";

import AppNavigation from "./AppNavigation";
import { typeDefs, useNavLocationState } from "./useNavLocation";

const client = new ApolloClient({
  clientState: {
    defaults: {
      navLocation: {
        currentLocation: "home",
        previousLocation: "",
        __typename: "NavLocation"
      }
    },
    resolvers: [],
    typeDefs
  }
});

function App() {
  const navLocation = useNavLocationState();
  console.log("navlocation in app", navLocation);
  return (
    <AppNavigation>
      <Button variant="contained" color="secondary">
        Map
      </Button>
      <Button variant="contained" color="primary">
        Home
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
