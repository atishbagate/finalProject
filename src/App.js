import React from "react";
import GlobalStyles from "./components/GlobalStyles";
//components and pages
import Home from "./pages/Home";
//import router
import { Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}
