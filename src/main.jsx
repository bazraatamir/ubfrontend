import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {Provider} from "react-redux";
import store from "./shared/store.js";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import PublicRoutes from "./features/public/routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
