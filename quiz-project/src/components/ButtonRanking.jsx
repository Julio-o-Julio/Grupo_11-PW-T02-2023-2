import { useState } from 'react';

import Modal from './Modal';

import { Button, StyledConteinerRating } from '../styles';
import Header from './Header';
import ContentRating from './ContentRating';

const PodiumSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
    >
      <path
        d="M20.5 27.8333V16.5833C20.5 14.8156 20.5 13.9317 19.9509 13.3824C19.4016 12.8333 18.5177 12.8333 16.75 12.8333H14.25C12.4822 12.8333 11.5983 12.8333 11.0492 13.3824C10.5 13.9317 10.5 14.8156 10.5 16.5833M10.5 27.8333V21.5833"
        stroke="#2D1B70"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10.5 27.8333C10.5 26.0656 10.5 25.1817 9.95082 24.6324C9.40165 24.0833 8.51776 24.0833 6.75 24.0833C4.98224 24.0833 4.09835 24.0833 3.54918 24.6324C3 25.1817 3 26.0656 3 27.8333"
        stroke="#2D1B70"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M28 27.8333V24.0833C28 22.3156 28 21.4317 27.4509 20.8824C26.9016 20.3333 26.0177 20.3333 24.25 20.3333C22.4823 20.3333 21.5984 20.3333 21.0491 20.8824C20.5 21.4317 20.5 22.3156 20.5 24.0833V27.8333"
        stroke="#2D1B70"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14.4324 4.11145C14.9074 3.25936 15.1449 2.83331 15.5 2.83331C15.8551 2.83331 16.0926 3.25936 16.5676 4.11145L16.6905 4.3319C16.8254 4.57404 16.8929 4.69511 16.9981 4.77499C17.1034 4.85488 17.2344 4.88453 17.4965 4.94383L17.7351 4.99783C18.6575 5.20653 19.1187 5.31088 19.2285 5.66371C19.3382 6.01655 19.0237 6.38421 18.395 7.11954L18.2322 7.30978C18.0536 7.51873 17.9642 7.6232 17.924 7.75245C17.8839 7.88171 17.8974 8.0211 17.9244 8.2999L17.949 8.55371C18.044 9.53479 18.0916 10.0253 17.8044 10.2434C17.517 10.4615 17.0852 10.2626 16.2216 9.865L15.9982 9.76213C15.7527 9.64913 15.6301 9.59263 15.5 9.59263C15.3699 9.59263 15.2472 9.64913 15.0017 9.76213L14.7784 9.865C13.9147 10.2626 13.483 10.4615 13.1956 10.2434C12.9084 10.0253 12.9559 9.53479 13.051 8.55371L13.0756 8.2999C13.1026 8.0211 13.1161 7.88171 13.076 7.75245C13.0357 7.6232 12.9464 7.51873 12.7677 7.30978L12.605 7.11954C11.9762 6.38421 11.6618 6.01655 11.7715 5.66371C11.8813 5.31088 12.3424 5.20653 13.2649 4.99783L13.5035 4.94383C13.7656 4.88453 13.8966 4.85488 14.0019 4.77499C14.1071 4.69511 14.1746 4.57404 14.3095 4.3319L14.4324 4.11145Z"
        stroke="#2D1B70"
        strokeWidth="2"
      />
    </svg>
  );
};

const ButtonRanking = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>
        <PodiumSvg />
        Ranking global
      </Button>
      <Modal isOpen={openModal} closeModal={() => setOpenModal(!openModal)}>
        <Header>Ranking global</Header>
        <StyledConteinerRating>
          <ContentRating place={1}>Teste</ContentRating>
          <ContentRating place={2}>Teste</ContentRating>
          <ContentRating place={3}>Teste</ContentRating>
          <ContentRating place={4}>Teste</ContentRating>
          <ContentRating place={5}>Teste</ContentRating>
          <ContentRating place={6}>Teste</ContentRating>
          <ContentRating place={7}>Teste</ContentRating>
          <ContentRating place={8}>Teste</ContentRating>
          <ContentRating place={9}>Teste</ContentRating>
          <ContentRating place={10}>Teste</ContentRating>
        </StyledConteinerRating>
      </Modal>
    </>
  );
};

export default ButtonRanking;
