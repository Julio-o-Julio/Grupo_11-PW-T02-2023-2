import { BrowserRouter } from 'react-router-dom';
import UserStorage from './contexts/UserContext';
import AppRoutes from './routes/AppRoutes';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <AppRoutes />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
