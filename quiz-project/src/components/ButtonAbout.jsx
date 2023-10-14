import { useState } from 'react';

import Modal from './Modal';

import { ButtonDarkTheme, SubTitle, TextCenter } from '../styles';

const ButtonAbout = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ButtonDarkTheme onClick={() => setOpenModal(true)}>
        Sobre
      </ButtonDarkTheme>
      <Modal isOpen={openModal} closeModal={() => setOpenModal(!openModal)}>
        <SubTitle>Sobre</SubTitle>
        <TextCenter>
          Este site se trata de um projeto acadêmico feito por Anália Beatriz
          (Front-end) e Julio Souza (Back-end) para a matéria de Programação
          para Web.
        </TextCenter>
        <TextCenter>
          Esta aplicação web consiste em um jogo de quizes sobre programação,
          hardwares e história da computação. Neste site você vai poder
          aprender, se divertir e competir com outros usuários.
        </TextCenter>
        <TextCenter>
          Temos ranking de melhores jogadores, conquistas para você analizar seu
          progresso e uma forma intuitiva de jogar.
        </TextCenter>
      </Modal>
    </>
  );
};

export default ButtonAbout;
