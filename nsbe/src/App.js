import React from "react";
import { Route, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import {
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Home />}
    >
        <Route
          path="/selection"
          element={<Home />}
        />
    </Route>
  )
);

function App() {

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
