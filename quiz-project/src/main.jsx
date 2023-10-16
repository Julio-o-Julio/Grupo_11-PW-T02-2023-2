import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/Main.css';

/* Configurando Router */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/* Pages */
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home.jsx';
import RecoverPassword from './pages/RecoverPassword.jsx';
import CodeVerification from './pages/CodeVerification.jsx';
import ChangeData from './pages/ChangeData.jsx';
import { UserProvider } from './hooks/UserContext.jsx';
import ChangePassword from './pages/ChangePassword.jsx';
import Game from './pages/Game.jsx';
import Conclusionlose from './pages/Conclusionlose.jsx';
import Conclusion from './pages/Conclusion.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/recoverpassword',
        element: <RecoverPassword />
      },
      {
        path: '/verification',
        element: <CodeVerification />
      },
      {
        path: '/changepassword',
        element: <ChangePassword />
      },
      {
        path: '/changedata',
        element: <ChangeData />
      },
      {
        path: '/game/:category',
        element: <Game />
      },
      {
        path: '/game/conclusion',
        element: <Conclusion />
      },
      {
        path: '/game/conclusionlose',
        element: <Conclusionlose />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
