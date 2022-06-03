import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);