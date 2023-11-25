import { createContext, useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile
} from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import {
  checkPlaying,
  createRankingUser,
  createUser,
  getCategoryAtuall,
  getEndGame
} from '../services/api';

export const UserContext = createContext();

const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState([]);
  const [error, setError] = useState(false);

  const [category, setCategory] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const setName = (name) => {
    setLoading(true);
    setError(false);
    updateProfile(auth.currentUser, { displayName: name })
      .then(() => {
        setMessage([...message, 'Nome atualizado!']);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const setEmail = (email) => {
    setLoading(true);
    setError(false);
    updateEmail(auth.currentUser, email)
      .then(() => {
        setMessage([...message, 'E-mail atualizado!']);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const setPassword = (password) => {
    setLoading(true);
    setError(false);
    updatePassword(auth.currentUser, password)
      .then(() => {
        setMessage([...message, 'Senha atualizada!']);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const userCreate = async (name, email, password) => {
    try {
      setLoading(true);
      setError(false);

      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;

      if (user) {
        setData(user);
        setName(name);
        createUser(user.uid);
        createRankingUser(name, user.uid);
        setLogin(true);
        navigate('/');
        setMessage([...message, 'Usuário criado com sucesso!']);
      }
    } catch (error) {
      setData(null);
      setLogin(false);
      setError('Erro: E-mail já cadastrado!');
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (email, password) => {
    try {
      setError(false);
      setLoading(true);

      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;

      if (user) {
        setData(user);
        setLogin(true);
        if (user.email === 'dev.js.programmer@gmail.com') setAdmin(true);
        navigate('/');
      }
    } catch (error) {
      setData(null);
      setAdmin(false);
      setLogin(false);
      setError('Erro: Credenciais inválidas!');
    } finally {
      setLoading(false);
    }
  };

  const userLogout = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);

      await signOut(auth);

      setData(null);
      setLogin(false);
      setAdmin(false);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const checkLogin = () => {
      try {
        setLoading(true);
        setError(false);

        onAuthStateChanged(auth, (user) => {
          if (user) {
            setData(user);
            setLogin(true);
            if (user.email === 'dev.js.programmer@gmail.com') setAdmin(true);

            if (location.pathname.includes('/login')) {
              navigate('/');
            }
          } else {
            setAdmin(false);
            setLogin(false);
          }
        });
      } catch (error) {
        setData(null);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (!login) checkLogin();
  }, [login, navigate, location]);

  useEffect(() => {
    const isPlaying = async () => {
      if (
        data &&
        (await checkPlaying(data.uid)) === true &&
        !(await getEndGame(data.uid))
      ) {
        const categoryAtuall = await getCategoryAtuall(data.uid);
        setCategory(categoryAtuall);
        navigate(`/game/category/${categoryAtuall}`);
      }
    };

    if (data) isPlaying();
  }, [navigate, data]);

  return (
    <UserContext.Provider
      value={{
        userCreate,
        userLogin,
        userLogout,
        setName,
        setEmail,
        setPassword,
        data,
        login,
        admin,
        loading,
        message,
        error,
        category,
        setCategory
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserStorage;
