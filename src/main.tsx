import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/global.scss";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Theme>
        <App />
      </Theme>
    </Provider>
  </StrictMode>
);
