import { useState } from 'react';

import Modal from './Modal';

import { ButtonDarkTheme, SubTitle, TextCenter } from '../styles';
import { useNavigate } from 'react-router-dom';

const ButtonExitGame = () => {
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <ButtonDarkTheme onClick={() => setOpenModal(true)}>Sair</ButtonDarkTheme>
      <Modal isOpen={openModal} closeModal={() => setOpenModal(!openModal)}>
        <SubTitle>Sair</SubTitle>
        <TextCenter>Tem certeza que deseja sair?</TextCenter>
        <TextCenter>O seu progresso desta partida será perdido!</TextCenter>
        <ButtonDarkTheme onClick={() => navigate('/')}>Sair</ButtonDarkTheme>
      </Modal>
    </>
  );
};

export default ButtonExitGame;
