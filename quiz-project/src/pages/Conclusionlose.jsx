import { useNavigate } from 'react-router-dom';
import { Button, StyledQuestion } from '../styles';

const LoserFace = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="168"
      height="130"
      viewBox="0 0 168 130"
      fill="none"
    >
      <path
        d="M19.0556 0H148.944V14.4444H19.0556V0ZM19.0556 115.556H0.5V14.4444H19.0556V115.556ZM148.944 115.556V130H19.0556V115.556H148.944ZM148.944 115.556H167.5V14.4444H148.944V115.556ZM65.4444 36.1111H46.8889V50.5556H65.4444V36.1111ZM102.556 36.1111H121.111V50.5556H102.556V36.1111ZM56.1667 93.8889V79.4444H111.833V93.8889H130.389V79.4444H111.833V65H56.1667V79.4444H37.6111V93.8889H56.1667Z"
        fill="url(#paint0_linear_19_892)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_19_892"
          x1="-23"
          y1="-0.499998"
          x2="193"
          y2="98"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8E1515" stopOpacity="0.8" />
          <stop offset="0.0001" stopColor="#8A0A0A" stopOpacity="0.8" />
          <stop offset="1" stopColor="#E63429" stopOpacity="0.8" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Conclusionlose = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledQuestion>
        <p>Você não foi muito bem desta vez!</p>
        <p>Você acertou 3 respostas de 10 perguntas</p>
      </StyledQuestion>
      <p>O que está acontecendo meu jovem? Jesus Christ!!</p>
      <LoserFace />
      <Button onClick={() => navigate(-1)}>Jogar novamente</Button>
      <Button onClick={() => navigate('/')}>Voltar a página inicial</Button>
    </>
  );
};

export default Conclusionlose;
