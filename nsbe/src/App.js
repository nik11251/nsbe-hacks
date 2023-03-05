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
import Video2 from "./pages/Video2";
import CreatePage from "./pages/Video2/CreatePage";
import JoinPage from "./pages/Video2/JoinPage";
import RoomPage from "./pages/Video2/RoomPage";
import Video3 from "./pages/Video3/webpack.config";
import VideoApp from "./pages/Video/VideoApp";

function App() {
    const { token, setToken } = useToken()

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
                    element={<Login setToken={setToken} />}
                />
                <Route
                    path="/nsbe-hacks/signup"
                    element={<Signup setToken={setToken} />}
                />
                <Route
                    path="/nsbe-hacks/video2"
                    element={<Video2 />}
                />
                    <Route
                        path="/nsbe-hacks/video2/create"
                        element={<CreatePage />}
                    />
                    <Route
                        path="/nsbe-hacks/video2/join"
                        element={<JoinPage />}
                    />
                    <Route
                        path="/nsbe-hacks/video2/room"
                        element={<RoomPage />}
                    />
                    <Route
                        path="/nsbe-hacks/video3"
                        element={<Video3 />}
                    />
                    <Route
                        path="/nsbe-hacks/video"
                        element={<VideoApp />}
                    />
                
            </Route>
        )
    );

    return (
        <div>
            <NavBar />
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        </div>
    );
}

export default App;
