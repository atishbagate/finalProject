import React from "react";
import GlobalStyles from "./components/GlobalStyles";
//components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
//import router
import { Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <GlobalStyles />
      {/* <Nav /> */}
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}
