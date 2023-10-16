import { useState } from 'react';

import Modal from './Modal';
import Header from './Header';
import ContentAchievements from './ContentAchievements';

import { Button, StyledConteinerAchievements } from '../styles';

const StarSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="31"
      viewBox="0 0 30 31"
      fill="none"
    >
      <path
        d="M14.0562 5.55081C14.3456 4.71841 14.4902 4.30223 14.7042 4.18688C14.8894 4.08704 15.1122 4.08704 15.2975 4.18688C15.5114 4.30223 15.656 4.71841 15.9454 5.55081L17.8582 11.0538C17.9406 11.2907 17.9817 11.4092 18.056 11.4974C18.1215 11.5753 18.2051 11.636 18.2995 11.6743C18.4062 11.7176 18.5316 11.7202 18.7824 11.7253L24.6071 11.844C25.4882 11.8619 25.9287 11.8709 26.1046 12.0387C26.2567 12.184 26.3256 12.396 26.2879 12.6029C26.2444 12.8421 25.8932 13.1082 25.191 13.6407L20.5484 17.1603C20.3485 17.3119 20.2486 17.3877 20.1876 17.4854C20.1337 17.5719 20.1019 17.6702 20.0946 17.7717C20.0865 17.8867 20.1227 18.0067 20.1954 18.2468L21.8825 23.8232C22.1376 24.6667 22.2652 25.0884 22.16 25.3074C22.0689 25.4971 21.8885 25.6281 21.68 25.6562C21.4391 25.6886 21.0775 25.4369 20.3541 24.9336L15.572 21.6059C15.3661 21.4627 15.2633 21.3911 15.1514 21.3632C15.0525 21.3387 14.9491 21.3387 14.8504 21.3632C14.7385 21.3911 14.6355 21.4627 14.4296 21.6059L9.64756 24.9336C8.92421 25.4369 8.56254 25.6886 8.32166 25.6562C8.1132 25.6281 7.93282 25.4971 7.84171 25.3074C7.73644 25.0884 7.86404 24.6667 8.11922 23.8232L9.80629 18.2468C9.87891 18.0067 9.91523 17.8867 9.90705 17.7717C9.89983 17.6702 9.8679 17.5719 9.81404 17.4854C9.75308 17.3877 9.65314 17.3119 9.45328 17.1603L4.81073 13.6407C4.10848 13.1082 3.75735 12.8421 3.71376 12.6029C3.67603 12.396 3.74493 12.184 3.89709 12.0387C4.07289 11.8709 4.51343 11.8619 5.39449 11.844L11.2193 11.7253C11.47 11.7202 11.5954 11.7176 11.7022 11.6743C11.7966 11.636 11.8802 11.5753 11.9457 11.4974C12.0199 11.4092 12.0611 11.2907 12.1434 11.0538L14.0562 5.55081Z"
        stroke="#2D1B70"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ButtonAchievements = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>
        <StarSvg />
        Minhas conquistas
      </Button>
      <Modal isOpen={openModal} closeModal={() => setOpenModal(!openModal)}>
        <Header>Minhas conquistas</Header>
        <StyledConteinerAchievements>
          <ContentAchievements status={true}>
            Conseguir o máximo de pontos na modalidade Todos
          </ContentAchievements>
          <ContentAchievements status={false}>
          Conseguir o máximo de pontos na modalidade Programação
          </ContentAchievements>
          <ContentAchievements status={false}>
          Conseguir o máximo de pontos na modalidade Hardware
          </ContentAchievements>
          <ContentAchievements status={true}>
          Conseguir o máximo de pontos na modalidade Hardware
          </ContentAchievements>
          <ContentAchievements status={false}>
            Conseguir chegar ao top 1 na modalidade Todos
          </ContentAchievements>
        </StyledConteinerAchievements>
      </Modal>
    </>
  );
};

export default ButtonAchievements;
