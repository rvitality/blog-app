import React from "react";
import { createBrowserRouter, RouterProvider, Route, Link, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";

import Home from "./routes/Home/Home.route";
import Register from "./routes/Register/Register.route";
import Login from "./routes/Login/Login.route";
import Single from "./routes/Single/Single.route";
import Write from "./routes/Write/Write.route";

import "./App.scss";

const Layout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/post/:id",
                element: <Single />,
            },
            {
                path: "/write",
                element: <Write />,
            },
        ],
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

const App = () => {
    return (
        <div className="app">
            <div className="container">
                <RouterProvider router={router} />
            </div>
        </div>
    );
};

export default App;
