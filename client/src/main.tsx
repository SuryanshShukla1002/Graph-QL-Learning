import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
const cache = new InMemoryCache

const appoloclient = new ApolloClient({
  cache,
  uri:import.meta.env.VITE_GRAPHQL_SERVER,
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={appoloclient}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
