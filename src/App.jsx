import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HouseDetail from "./components/HouseDetail";
import Home from "./pages/Home";

//REDUX
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";
import { fetchPropertyList } from "./actions/fetch.action";
import HouseList from "./components/HouseList";

// const store = configureStore({
//   reducer: rootReducer,
//   devTools: true,
// });

// store.dispatch(fetchPropertyList());
function App() {
  return (
    // <Provider store={store}>
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />}>
          <Route index element={<HouseList />} />
          <Route path="/:title" element={<HouseDetail />} />
          <Route path="*" replace element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
    // </Provider>
  );
}

export default App;
