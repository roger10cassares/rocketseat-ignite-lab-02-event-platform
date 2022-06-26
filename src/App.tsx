import { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { client } from "./lib/apollo";
import { Event } from "./pages/Event";
import { Router } from "./Router";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}
