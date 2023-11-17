import LoginHeader from '../components/LoginHeader';
import LoginRoutes from '../routes/LoginRoutes';

const Login = () => {
  return (
    <>
      <LoginHeader />
      <main className="container">
        <LoginRoutes />
      </main>
    </>
  );
};

export default Login;
