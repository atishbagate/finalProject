import React from "react";
import GlobalStyles from "./components/GlobalStyles";
//components and pages
import Home from "./pages/Home";
export default function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
}
