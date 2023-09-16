import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/Main.css";

/* Configurando Router */
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

/* Pages */
import Login from "./routes/login.jsx";
import Register from "./routes/Register.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Home from "./routes/Home.jsx";

const isLoged = true;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: isLoged ? <Home /> : <Navigate to='/login' />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
