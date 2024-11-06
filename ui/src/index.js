import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { CategoryContextProvider } from "./context/CategoryContext";
import { BrowserRouter } from "react-router-dom";
import { DateContextProvider } from "./context/DateContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryContextProvider>
        <DateContextProvider>
          <App />
        </DateContextProvider>
      </CategoryContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
