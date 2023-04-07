import React from "react";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";

import store from "./store";
import App from "./App";
import Home from "./pages/Home";
import Crypto from "./pages/Crypto";
import Trending from "./pages/Trending";
import Saved from "./pages/Saved";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/",
                element: <Crypto />,
            },
            {
                path: "/trending",
                element: <Trending />,
            },
            {
                path: "/saved",
                element: <Saved />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
