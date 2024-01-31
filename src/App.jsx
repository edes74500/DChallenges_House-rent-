import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HouseDetail from "./components/HouseDetail";
import Home from "./pages/Home";
import "@fontsource-variable/outfit";
//REDUX
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";
import { fetchPropertyList } from "./actions/fetch.action";
import HouseList from "./components/HouseList";
import { createGlobalStyle } from "styled-components";
import { globalStyles } from "./styles/globalStyles";

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`;

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

store.dispatch(fetchPropertyList());
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle data-identifier="StyledGlobalStyle" />
        {/* <Router> */}
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />}>
            <Route index element={<HouseList />} />
            <Route path="/:title" element={<HouseDetail />} />
            <Route path="*" replace element={<Navigate to="/" />} />
            {/* <Route path="*" element={<HouseDetail />} /> */}
          </Route>
        </Routes>
        {/* </Router> */}
      </Provider>
    </BrowserRouter>
  );
}

export default App;
