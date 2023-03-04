import React, {useState} from "react";
import { Route, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import {
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./components/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home/>} >
      <Route path="/nsbe-hacks" element={<Home />}>
        <Route path="/nsbe-hacks/login" element={<Login />} />
      </Route>
      <Route
              path="/selection"
              element={<Home />}
              />
    </Route>
    
  )
);

function App() {
    const [token, setToken] = useState();
    return (
      <div>
        <NavBar/>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </div>
    );
}

export default App;