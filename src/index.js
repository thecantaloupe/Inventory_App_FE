import React from "react";
import ReactDOM from "react-dom";
import './index.css';
// IMPORT ROUTER
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import { reducers } from "./reducers";
// Import Milligram for Some Default Styling
import "milligram";

// const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  // Wrap our App Component inside router so App and children can use router
  // Pass the app component into Route to give it access to router props
  <Router>
    <React.StrictMode>
      <Routes>
        {/* <Provider store={store}> */}
          <Route path="*" element={<App />} />
         {/* </Provider> */}
      </Routes>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
