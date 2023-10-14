import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, CenterInLine, StyledProfile } from '../styles';
import Modal from './Modal';
import getUsername from '../hooks/getUsername';
import { signOut } from 'firebase/auth';
import { auth } from '../auth/firebaseConfig';

const AvatarProfile = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
    >
      <path
        d="M25 25C28.4518 25 31.25 22.2018 31.25 18.75C31.25 15.2982 28.4518 12.5 25 12.5C21.5482 12.5 18.75 15.2982 18.75 18.75C18.75 22.2018 21.5482 25 25 25Z"
        stroke="#2D1B70"
        strokeWidth="4"
      />
      <path
        d="M37.4355 41.6667C37.104 35.6427 35.2597 31.25 24.9997 31.25C14.7399 31.25 12.8955 35.6427 12.564 41.6667"
        stroke="#2D1B70"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M14.5834 6.95379C17.6477 5.18119 21.2055 4.16666 25.0001 4.16666C36.5059 4.16666 45.8334 13.4941 45.8334 25C45.8334 36.5058 36.5059 45.8333 25.0001 45.8333C13.4941 45.8333 4.16675 36.5058 4.16675 25C4.16675 21.2054 5.18127 17.6476 6.95387 14.5833"
        stroke="#2D1B70"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};

const getName = async (uid) => {
  const name = await getUsername(uid);
  const fragmentName = name.split(' ');
  const nameAndSurname =
    fragmentName.length > 1
      ? fragmentName[0] + ' ' + fragmentName[1]
      : fragmentName;

  return nameAndSurname;
};

const Profile = ({ uid }) => {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const userName = await getName(uid);
        setName(userName);
      } catch (error) {
        console.error('Erro ao tentar obter o nome do usuário:', error);
      }
    }

    fetchData();
  }, [uid]);

  const handleExit = () => {
    signOut(auth)
    .then(() => {
      console.log('Usuário desconectado com sucesso.');
      navigate('/login');
    })
    .catch((error) => {
      console.error('Erro ao desconectar o usuário:', error);
    });
  };

  return (
    <>
      <StyledProfile key={uid} onClick={() => setOpenModal(true)}>
        <AvatarProfile />
        {name}
      </StyledProfile>
      <Modal isOpen={openModal} closeModal={() => setOpenModal(!openModal)}>
        <CenterInLine>
          <AvatarProfile />
          {name}
        </CenterInLine>
        <Button onClick={handleExit}>Sair</Button>
      </Modal>
    </>
  );
};

export default Profile;
