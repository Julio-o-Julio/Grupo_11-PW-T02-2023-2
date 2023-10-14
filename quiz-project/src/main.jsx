import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/Main.css';

/* Configurando Router */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/* Pages */
import Login from './routes/Login.jsx';
import Register from './routes/Register.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Home from './routes/Home.jsx';
import RecoverPassword from './routes/RecoverPassword.jsx';
import CodeVerification from './routes/CodeVerification.jsx';
import { UserProvider } from './hooks/UserContext.jsx';
import AuthenticationCheck from './auth/authenticationCheck.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: (
          <AuthenticationCheck path="/">
            <Home />
          </AuthenticationCheck>
        )
      },
      {
        path: '/login',
        element: (
          <AuthenticationCheck path="/login">
            <Login />
          </AuthenticationCheck>
        )
      },
      {
        path: '/register',
        element: (
          <AuthenticationCheck path="/register">
            <Register />
          </AuthenticationCheck>
        )
      },
      {
        path: '/recoverpassword',
        element: (
          <AuthenticationCheck path="/recoverpassword">
            <RecoverPassword />
          </AuthenticationCheck>
        )
      },
      {
        path: '/verification',
        element: (
          <AuthenticationCheck path="/verification">
            <CodeVerification />
          </AuthenticationCheck>
        )
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <AuthenticationCheck>
        <RouterProvider router={router} />
      </AuthenticationCheck>
    </UserProvider>
  </React.StrictMode>
);
