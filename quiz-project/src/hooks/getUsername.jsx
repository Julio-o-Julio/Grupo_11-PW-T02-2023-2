import getUser from './getUser';

const getUsername = async (uid) => {
  try {
    const user = await getUser(uid);

    return user.name;
  } catch (error) {
    console.error('Erro ao obter o nome do usuário:', error);

    throw error;
  }
};

export default getUsername;
