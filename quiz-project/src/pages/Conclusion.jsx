import { useNavigate } from 'react-router-dom';
import { Button, StyledQuestion } from '../styles';

const HappyFace = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="168"
      height="131"
      viewBox="0 0 168 131"
      fill="none"
    >
      <path
        d="M19.0556 0.5H148.944V14.9444H19.0556V0.5ZM19.0556 116.056H0.5V14.9444H19.0556V116.056ZM148.944 116.056V130.5H19.0556V116.056H148.944ZM148.944 116.056H167.5V14.9444H148.944V116.056ZM65.4444 36.6111H46.8889V51.0556H65.4444V36.6111ZM102.556 36.6111H121.111V51.0556H102.556V36.6111Z"
        fill="url(#paint0_linear_19_893)"
      />
      <path
        d="M111.833 108.833H56.1667V94.3889H111.833V108.833Z"
        fill="url(#paint1_linear_19_893)"
      />
      <path
        d="M37.6113 79.9444H56.1667V94.3889H37.6113V79.9444Z"
        fill="url(#paint2_linear_19_893)"
      />
      <path
        d="M111.834 79.9444H130.389V94.3889H111.833L111.834 79.9444Z"
        fill="url(#paint3_linear_19_893)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_19_893"
          x1="-23"
          y1="1.77849e-06"
          x2="193"
          y2="98.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#127116" stopOpacity="0.8" />
          <stop offset="0.0001" stopColor="#127116" stopOpacity="0.8" />
          <stop offset="1" stopColor="#17FF21" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_19_893"
          x1="-23"
          y1="1.77849e-06"
          x2="193"
          y2="98.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#127116" stopOpacity="0.8" />
          <stop offset="0.0001" stopColor="#127116" stopOpacity="0.8" />
          <stop offset="1" stopColor="#17FF21" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_19_893"
          x1="-23"
          y1="1.77849e-06"
          x2="193"
          y2="98.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#127116" stopOpacity="0.8" />
          <stop offset="0.0001" stopColor="#127116" stopOpacity="0.8" />
          <stop offset="1" stopColor="#17FF21" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_19_893"
          x1="-23"
          y1="1.77849e-06"
          x2="193"
          y2="98.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#127116" stopOpacity="0.8" />
          <stop offset="0.0001" stopColor="#127116" stopOpacity="0.8" />
          <stop offset="1" stopColor="#17FF21" stopOpacity="0.8" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Conclusion = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledQuestion>
        <p>Parabéns!!</p>
        <p>Você acertou 8 respostas de 10 perguntas</p>
      </StyledQuestion>
      <p>O seu ranking está subindo não é mesmo?</p>
      <HappyFace />
      <Button onClick={() => navigate(-1)}>Jogar novamente</Button>
      <Button onClick={() => navigate('/')}>Voltar a página inicial</Button>
    </>
  );
};

export default Conclusion;
