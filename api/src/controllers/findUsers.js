const admin = require('firebase-admin');

const findUsers = (request, response) => {
  console.log(`get users of ${request}`);
  admin
    .firestore()
    .collection('users')
    .get()
    .then((snapshot) => {
      if (snapshot.empty) {
        return response
          .status(404)
          .json({ error: 'Não possui usuários cadastrados' });
      }

      const users = [];
      snapshot.forEach((doc) => {
        users.push(doc.data());
      });

      response.json(users);
    })
    .catch((error) => {
      console.error('Erro ao buscar users:', error);
      response.status(500).json({ error: 'Erro ao buscar users' });
    });
};

module.exports = findUsers;
