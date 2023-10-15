import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';

import { SubTitle } from '../styles';

const AuthenticationCheck = ({ children, path }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    <SubTitle>Verificando autenticação...</SubTitle>;
  }

  if (user) {
    if (path === '/login') {
      return;
    }
    return children;
  }

  return;
};

export default AuthenticationCheck;
