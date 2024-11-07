import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { CategoryContextProvider } from "./context/CategoryContext";
import { BrowserRouter } from "react-router-dom";
import { DateContextProvider } from "./context/DateContext";
import { FilterContextProvider } from "./context/FilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryContextProvider>
        <DateContextProvider>
          <FilterContextProvider>
            <App />
          </FilterContextProvider>
        </DateContextProvider>
      </CategoryContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
