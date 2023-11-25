import { db } from '../firebase/firebaseConfig';
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

const shuffleVetor = (vetor) => {
  for (let i = vetor.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [vetor[i], vetor[j]] = [vetor[j], vetor[i]];
  }

  return vetor;
};

const categoryProxy = (category) => {
  const categories = ['programacao', 'historiaComputacao', 'hardware'];

  let categoryAtt =
    category === 'programming'
      ? categories[0]
      : category === 'historycomputing'
      ? categories[1]
      : category === 'hardware'
      ? categories[2]
      : 'todos';

  if (categoryAtt === 'todos') {
    const randomCategory = categories[Math.floor(Math.random() * 3)];
    categoryAtt = randomCategory;
  }

  return categoryAtt;
};

export const getQuestionRandom = async (category, userId) => {
  const docRef = doc(db, 'categories', categoryProxy(category));
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    let index = Math.floor(Math.random() * docSnap.data().questions.length);
    let question = null;

    const currentData = docSnap.data();

    if (currentData) {
      question = currentData.questions[index];
    }

    const currentGameData = await getCurrentGameData(userId);

    if (currentGameData.length > 0) {
      var lastId = currentGameData[currentGameData.length - 1].id;
    }

    while (lastId === question.id) {
      index = Math.floor(Math.random() * docSnap.data().questions.length);
      question = currentData.questions[index];
    }

    if (question) {
      const responses = shuffleVetor(question.responses);

      return {
        id: question.id,
        question: question.question,
        description: question.description,
        responses
      };
    }
  } else {
    return;
  }
};

export const getQuestion = async (category, questionId) => {
  const docRef = doc(db, 'categories', categoryProxy(category));
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const questions = docSnap.data().questions;

    if (questions) {
      const filteredQuestions = questions.filter(
        (question) => question.id === questionId
      );

      if (filteredQuestions.length > 0) {
        const question = filteredQuestions[0];
        const responses = shuffleVetor(question.responses);

        return {
          id: question.id,
          question: question.question,
          description: question.description,
          responses
        };
      }
    }
  } else {
    return;
  }
};

export const createUser = async (userId) => {
  await setDoc(doc(db, 'users', userId), {
    categoryAtuall: '',
    currentGameData: [],
    playing: false,
    questionIdAtuall: 0,
    scories: [],
    achievements: []
  });
};

export const createRankingUser = async (name, userId) => {
  const docRef = doc(db, 'ranking', 'usersScories');

  const newScore = { score: 0, uid: userId, name };

  await updateDoc(docRef, {
    scories: arrayUnion(newScore)
  });
};

export const getRanking = async (userId) => {
  const docRef = doc(db, 'ranking', 'usersScories');
  const ranking = await getDoc(docRef);

  const currentData = ranking.data();

  if (currentData) {
    const sortRanking = currentData.scories.sort((a, b) => b.score - a.score);

    if (userId) {
      const userIndex = sortRanking.findIndex((item) => item.uid === userId);
      const userScore = userIndex !== -1 ? sortRanking[userIndex].score : null;

      return { userRanking: userIndex + 1, userScore };
    }

    return sortRanking;
  }
};

export const postRanking = async (userId) => {
  const docRef = doc(db, 'ranking', 'usersScories');

  const docSnapshot = await getDoc(docRef);

  const currentData = docSnapshot.data();

  if (currentData) {
    const userScories = await getUserScore(userId);

    if (userScories) {
      const soma = userScories.reduce(
        (acumulador, elemento) => acumulador + elemento,
        0
      );

      const newScore = soma / userScories.length;

      const scoriesArray = currentData.scories;

      const indexUser = scoriesArray.findIndex((item) => item.uid === userId);

      if (indexUser !== -1) {
        scoriesArray[indexUser].score = newScore;

        await updateDoc(docRef, { scories: scoriesArray });
      }
    }
  }
};

export const getUserScore = async (userId) => {
  const docRef = doc(db, 'users', userId);
  const docSnapshot = await getDoc(docRef);

  const currentData = docSnapshot.data();

  if (currentData) {
    const userScories = currentData.scories;

    return userScories;
  }
};

export const postUserScore = async (newScore, userId) => {
  const docRef = doc(db, 'users', userId);

  await updateDoc(docRef, {
    scories: arrayUnion(newScore)
  });
};

export const getAchievements = async () => {
  const docRef = doc(db, 'achievements', 'achievements');
  const docSnapshot = await getDoc(docRef);

  const currentData = docSnapshot.data();

  if (currentData) {
    const achievements = currentData.achievements;

    return achievements;
  }
};

export const getUserAchievements = async (userId) => {
  const docRef = doc(db, 'users', userId);
  const docSnapshot = await getDoc(docRef);

  const currentData = docSnapshot.data();

  if (currentData) {
    const achievements = currentData.achievements;

    return achievements;
  }
};

export const postUserAchievements = async (newAchievementId, userId) => {
  const docRef = doc(db, 'users', userId);

  await updateDoc(docRef, {
    achievements: arrayUnion(newAchievementId)
  });
};

export const postPlaying = async (isPlaying, userId) => {
  const docRef = doc(db, 'users', userId);
  await updateDoc(docRef, { playing: isPlaying });
};

export const checkPlaying = async (userId) => {
  const docRef = doc(db, 'users', userId);
  const docSnapshot = await getDoc(docRef);

  const currentData = docSnapshot.data();

  if (currentData) {
    const playing = currentData.playing;

    return playing;
  }
};

export const getQuestionIdAtuall = async (userId) => {
  const userInfo = await getDoc(doc(db, 'users', userId));
  const currentData = userInfo.data();

  if (currentData) {
    const questionIdAtuall = currentData.questionIdAtuall;

    return questionIdAtuall;
  }
};

export const postQuestionIdAtuall = async (questionIdAtuall, userId) => {
  await updateDoc(doc(db, 'users', userId), { questionIdAtuall });
};

export const deleteQuestionIdAtuall = async (userId) => {
  const docRef = doc(db, 'users', userId);
  await updateDoc(docRef, { questionIdAtuall: 0 });
};

export const getCategoryAtuall = async (userId) => {
  const docRef = doc(db, 'users', userId);
  const docSnapshot = await getDoc(docRef);

  const currentData = docSnapshot.data();

  if (currentData) {
    const categoryAtuall = currentData.categoryAtuall;

    return categoryAtuall;
  }
};

export const postCategoryAtuall = async (category, userId) => {
  const docRef = doc(db, 'users', userId);
  await updateDoc(docRef, { categoryAtuall: category });
};

export const deleteCategoryAtuall = async (userId) => {
  const docRef = doc(db, 'users', userId);
  await updateDoc(docRef, { categoryAtuall: '' });
};

export const getCurrentGameData = async (userId) => {
  const docRef = doc(db, 'users', userId);
  const docSnapshot = await getDoc(docRef);

  const currentData = docSnapshot.data();

  if (currentData) {
    const currentGameData = currentData.currentGameData;

    return currentGameData;
  }
};

export const postCurrentGameData = async (currentGameData, userId) => {
  const docRef = doc(db, 'users', userId);
  await updateDoc(docRef, { currentGameData });
};

export const deleteCurrentGameData = async (userId) => {
  const docRef = doc(db, 'users', userId);
  await updateDoc(docRef, { currentGameData: [] });
};

export const createQuestion = async (
  category,
  questionId,
  question,
  description,
  response1,
  response2,
  response3,
  response4,
  responseIdCorrect
) => {
  const getCategory = categoryProxy(category);

  const docRef = doc(db, 'categories', getCategory);

  const newQuestion = {
    question,
    description,
    id: Number(questionId),
    responses: [
      { id: 1, response: response1 },
      { id: 2, response: response2 },
      { id: 3, response: response3 },
      { id: 4, response: response4 }
    ]
  };

  await updateDoc(docRef, {
    questions: arrayUnion(newQuestion)
  });

  const newResponseCorrect = {
    questionId: Number(questionId),
    responseId: Number(responseIdCorrect)
  };

  await updateDoc(doc(db, 'template', getCategory), {
    responsesCorrects: arrayUnion(newResponseCorrect)
  });
};

export const getEndGame = async (userId) => {
  const docRef = doc(db, 'users', userId);
  const docSnapshot = await getDoc(docRef);

  const currentData = docSnapshot.data();

  if (currentData) {
    const currentGameData = currentData.currentGameData;

    if (currentGameData.length >= 4) {
      return true;
    } else {
      return false;
    }
  }
};

export const getResponseCorrect = async (questionId) => {
  const primaryNumberQuestionId = Math.floor(questionId / 10);
  let category;

  switch (primaryNumberQuestionId) {
    case 1:
      category = 'programacao';
      break;
    case 2:
      category = 'hardware';
      break;
    default:
      category = 'historiaComputacao';
  }

  const docRef = doc(db, 'template', category);
  const docSnapshot = await getDoc(docRef);

  const currentData = docSnapshot.data();

  if (currentData) {
    const responsesCorrects = currentData.responsesCorrects;

    const responseCorrect = responsesCorrects.find(
      (responseCorrect) => responseCorrect.questionId === questionId
    );

    return responseCorrect ? responseCorrect.responseId : null;
  }

  return null;
};

export const getResponseCorrectDatas = async (currentGameData) => {
  const responsesCorrects = currentGameData.map(async (data) => {
    const responseCorrect = await getResponseCorrect(data.questionId);
    return responseCorrect === data.responseId ? data : null;
  });

  const filteredResponsesCorrects = (
    await Promise.all(responsesCorrects)
  ).filter((response) => response !== null);

  return filteredResponsesCorrects;
};
