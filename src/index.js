import React from "react";
import ReactDOM from "react-dom";
import './index.css';
// IMPORT ROUTER
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";
// Import Milligram for Some Default Styling
import "milligram";
import Warehouses from "./components/Warehouse/Warehouses";
import Warehouse from "./components/Warehouse/Warehouse";
import Auth from "./components/Auth/Auth";
import Form from "./components/Form/Form";
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  // Wrap our App Component inside router so App and children can use router
  // Pass the app component into Route to give it access to router props
  <Router>
    <React.StrictMode>
        <Provider store={store}>
        <Routes>
          <Route path="*" element={<App />} >
            <Route path="auth" element={<Auth /> } />
            <Route path="warehouses/" element={<Warehouses/>}>
              <Route
                index
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>Select an warehouse</p>
                  </main>
                }
                />
                <Route path="new" element={<Form />} />
                <Route path=":warehouseId/*" element={<Warehouse />} />
                <Route
                  path="*"
                  element={
                    <main style={{ padding: "1rem" }}>
                      <p>There's nothing here!</p>
                    </main>
                  }
                />
            </Route>
          </Route>
        </Routes>
        </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
