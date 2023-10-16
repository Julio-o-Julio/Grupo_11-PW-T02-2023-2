import { useNavigate, useParams } from 'react-router-dom';
import { Button, StyledQuestion } from '../styles';
import { useEffect, useState } from 'react';
import ButtonExitGame from '../components/ButtonExitGame';

const Game = () => {
  const [question, setQuestion] = useState('');
  const [description, setDescription] = useState('');
  const [responses, setResponses] = useState([]);

  const navigate = useNavigate();

  const { category } = useParams();

  useEffect(() => {
    const validCategories = [
      'todos',
      'programacao',
      'hardware',
      'historiacomputacao'
    ];

    if (!validCategories.includes(category)) {
      navigate('/error');
    }
  }, [category, navigate]);

  useEffect(() => {
    switch (category) {
      case 'todos':
        setQuestion('O que este código em python imprime na tela?');
        setDescription(
          'https://blogger.googleusercontent.com/img/a/AVvXsEiWSS1Fbh3F1QK8tap0QM9MbiGw3UOW2atExWlI39pQx1H3mAbWxXMA8TejUkhLZpQQefOyXTVnsKtirNZfvb4xwU7tJY7dFKXwn6fBvGOjf6EgUBQTX89DyK6oB9mHXz173jObThL_IDMVoNxS3kNEpDtRDCC2WjkyzSBFvf10e_KSCIMte8_bLQzgRXKV'
        );
        setResponses(['[1, 2, 3, 4]', 'Error', 'Nada', '0']);
        break;
      case 'programacao':
        setQuestion('O que este código em python imprime na tela?');
        setDescription(
          'https://blogger.googleusercontent.com/img/a/AVvXsEiWSS1Fbh3F1QK8tap0QM9MbiGw3UOW2atExWlI39pQx1H3mAbWxXMA8TejUkhLZpQQefOyXTVnsKtirNZfvb4xwU7tJY7dFKXwn6fBvGOjf6EgUBQTX89DyK6oB9mHXz173jObThL_IDMVoNxS3kNEpDtRDCC2WjkyzSBFvf10e_KSCIMte8_bLQzgRXKV'
        );
        setResponses(['[1, 2, 3, 4]', 'Error', 'Nada', '0']);
        break;
      case 'hardware':
        setQuestion('Para que é usado o peimeiro número das placas de vídeo?');
        setDescription('Ex: O 30 da placa de vídeo Geforce RTX 3070 TI');
        setResponses(['A potência', 'A cavalaria', 'A memória', 'A geração']);
        break;
      case 'historiacomputacao':
        setQuestion('Qual foi a primeria linguagem de programação?');
        setResponses(['Assembly', 'Plankalkül', 'Autocode', 'Fortran']);
        break;
      default:
        break;
    }
  }, [category]);

  const handleResponse = (response) => {
    if (response === 'Nada') {
      return navigate('/game/conclusion');
    } else if (response === 'A geração') {
      return navigate('/game/conclusion');
    } else if (response === 'Plankalkül') {
      return navigate('/game/conclusion');
    } else {
      return navigate('/game/conclusionlose');
    }
  };

  return (
    <>
      <StyledQuestion>
        {question}
        {description.includes('https://blogger') && (
          <img
            style={{ minWidth: 300, maxWidth: 500 }}
            src={description}
            alt="Descrição"
          />
        )}
        {!description.includes('https://blogger') && <p>{description}</p>}
      </StyledQuestion>

      {responses.map((response, index) => (
        <Button key={index} onClick={() => handleResponse(response)}>
          {response}
        </Button>
      ))}

      <ButtonExitGame>Sair</ButtonExitGame>
    </>
  );
};

export default Game;
