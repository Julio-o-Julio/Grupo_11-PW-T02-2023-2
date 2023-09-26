const admin = require('firebase-admin');

const findUser = (request, response) => {
  const userId = request.params.user;
  console.log(`get questions of ${request.params.categories}`);
  admin
    .firestore()
    .collection('users')
    .doc(userId)
    .get()
    .then((snapshot) => {
      if (!snapshot.exists) {
        return response.status(404).json({ error: 'User não encontrada' });
      }

      const user = snapshot.data();

      response.json(user);
    })
    .catch((error) => {
      console.error('Erro ao buscar user:', error);
      response.status(500).json({ error: 'Erro ao buscar user' });
    });
};

module.exports = findUser;
