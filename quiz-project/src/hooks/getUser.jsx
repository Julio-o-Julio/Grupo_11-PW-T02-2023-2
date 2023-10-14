import axios from 'axios';

const getUser = (uid) => {
  return axios
    .get(`http://localhost:8800/users/${uid}`)
    .then((response) => {
      const user = response.data;

      return user;
    })
    .catch((error) => console.log('Erro ao tentar extrair dados do usuário da API:', error));
};

export default getUser;
