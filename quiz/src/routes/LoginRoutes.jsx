import { Route, Routes } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import LoginCreateForm from '../components/LoginCreateForm';
import ForgotPasswordForm from '../components/ForgotPasswordForm';

const LoginRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/createuser" element={<LoginCreateForm />} />
      <Route path="/forgotpassword" element={<ForgotPasswordForm />} />
    </Routes>
  );
};

export default LoginRoutes;
