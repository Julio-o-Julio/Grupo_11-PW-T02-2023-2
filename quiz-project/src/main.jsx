import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/Main.css";

/* Configurando Router */
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

/* Pages */
import Login from "./routes/Login.jsx";
import Register from "./routes/Register.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Home from "./routes/Home.jsx";
import RecoverPassword from "./routes/RecoverPassword.jsx";
import CodeVerification from "./routes/CodeVerification.jsx";
import isLoged from "./auth/isLoged.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: isLoged() ? <Home /> : <Navigate to="/login" />,
      },
      {
        path: "/login",
        element: isLoged() ? <Navigate to="/" /> : <Login />,
      },
      {
        path: "/register",
        element: isLoged() ? <Navigate to="/" /> : <Register />,
      },
      {
        path: "/recoverpassword",
        element: isLoged() ? <Navigate to="/" /> : <RecoverPassword />,
      },
      {
        path: "/verification",
        element: isLoged() ? <Navigate to="/" /> : <CodeVerification />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
