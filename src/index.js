import { StrictMode } from "react";
import ReactDOM from "react-dom";
import rootReducer from "./reducer/index";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
const store = createStore(rootReducer);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
