import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//REDUX
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";
import { fetchPropertyList } from "./actions/fetch.action";
import HouseList from "./components/HouseList";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
