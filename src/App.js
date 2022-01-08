// import Header from "./components/Nav/Header";
// import Main from "./components/Main";
import { Outlet } from "react-router-dom"
import "./App.css"
import { NavBar } from "./components/nav";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getWarehouse } from "./actions/Warehouse"
import Main from "./components/Main";

function App() {
  const dispatch = useDispatch()
  // can make hooks here, pass down and if they change throw in array to redo get
  useEffect(() => { dispatch(getWarehouse())}, [dispatch]);

  return (
    <div className="App">
      <NavBar/>
      <Outlet />
      <Main />
    </div>
  );
}

export default App;




// throw route paths here and maybe just render the header? so header and links here and then 
// or the next layer of routes so render header and maybe 