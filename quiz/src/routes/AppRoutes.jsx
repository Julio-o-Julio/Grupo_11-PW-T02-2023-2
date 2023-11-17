import { Route, Routes } from 'react-router-dom';
import ProtectedRouteAdmin from '../components/ProtectedRouteAdmin';
import ProtectedRoute from '../components/ProtectedRoute';
import Login from '../pages/Login';
import UserLogout from '../components/UserLogout';
import PageNotFound from '../pages/PageNotFound';
import Home from '../pages/Home';
import Game from '../pages/Game';
import Admin from '../components/Admin';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/game/*"
        element={
          <ProtectedRoute>
            <Game />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRouteAdmin>
            <Admin />
          </ProtectedRouteAdmin>
        }
      />
      <Route path="/login/*" element={<Login />} />
      <Route path="/exit" element={<UserLogout />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
