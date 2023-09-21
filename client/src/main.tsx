import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Providers } from "./Store/Provider.tsx";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <Toaster
          position="bottom-left"
          richColors={true}
          closeButton={true}
          duration={4000}
        />
        <App />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>
);
