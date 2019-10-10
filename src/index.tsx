import * as React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import AppShell from "./AppShell";
import SomeView from "./SomeView";

const client = new ApolloClient({
  clientState: {
    defaults: {
      navLocation: "home"
    }
  }
});

function App() {
  return (
    <AppShell>
      <SomeView />
    </AppShell>
  );
}

const rootElement = document.getElementById("root");
render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);
