import React from "react";
import { RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import useToken from "./hooks/useToken";
import Home from "./pages/Home";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route
                path="/"
                
            >
            <Route
                path="/nsbe-hacks"
                element={<Home />}
            />
            <Route
                path="/nsbe-hacks/login"
                
            />
            <Route
                path="/nsbe-hacks/signup"
                
            />
            </Route>
        )
    );

    return (
        <div>
            <NavBar/>
            <React.StrictMode>
                <RouterProvider router={router}/>
            </React.StrictMode>
        </div>
    );
}

export default App;