const admin = require('firebase-admin');

const findQuestions = (request, response) => {
  const categoryId = request.params.categories;
  console.log(`get questions of ${request.params.categories}`);
  admin
    .firestore()
    .collection('categories')
    .doc(categoryId)
    .get()
    .then((snapshot) => {
      if (!snapshot.exists) {
        return response.status(404).json({ error: 'Categoria não encontrada' });
      }

      const categoryData = snapshot.data();
      const questions = categoryData.questions || [];

      response.json(questions);
    })
    .catch((error) => {
      console.error('Erro ao buscar categoria:', error);
      response.status(500).json({ error: 'Erro ao buscar categoria' });
    });
};

module.exports = findQuestions;
