import { useState } from 'react';

import Header from './components/Header';
import Modal from './components/Modal';

import { Label, Button, ButtonDarkTheme, Input, Span, Form, Link } from './styles';

/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */

import './App.css'

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <main className='Main'>
        <Header>Entrar</Header>
        <Form action="">
          <Span>
            <Label>E-mail</Label>
            <Input type='text'></Input>
          </Span>
          <Span>
            <Label>Senha</Label>
            <Input type='password'></Input>
          </Span>
          <Link href="/">Esqueci a senha</Link>
          <Button /* onSubmit={} */>Entrar</Button>
        </Form>
        <Span>
          Já tem uma conta?
          <Link href="/">Clique aqui para cadastrar-se</Link>
        </Span>
        <ButtonDarkTheme onClick={() => setOpenModal(true)}>Abir modal</ButtonDarkTheme>
        <Modal isOpen={openModal} closeModal={() => setOpenModal(!openModal)}>
          Modal
        </Modal>
      </main>
    </>
  )
}

export default App;
