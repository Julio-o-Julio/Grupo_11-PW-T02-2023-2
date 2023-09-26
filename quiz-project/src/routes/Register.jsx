import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, Label } from "../styles/index";
import Header from "../components/Header";
import { useState } from "react";
import { registerFirebase } from "../auth/registerFirebase";

const Register = () => {
  const navigate = useNavigate();

  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordRepet: "",
  });

  const handleChange = (event) => {
    setDataForm((dataForm) => ({
      ...dataForm,
      [event.target.name]: event.target.value,
    }));
  };

  const handleDataRegister = (event) => {
    event.preventDefault();
    return registerFirebase(dataForm.email, dataForm.password) && navigate("/login");
  };

  return (
    <>
      <Header>Cadastro</Header>
      <Form onSubmit={handleDataRegister}>
        <Label>Nome</Label>
        <Input name="name" type="text" onChange={handleChange} required />

        <Label>E-mail</Label>
        <Input name="email" type="email" onChange={handleChange} required />

        <Label>Senha</Label>
        <Input name="password" type="password" onChange={handleChange} required />

        <Label>Repita a senha</Label>
        <Input name="passwordRepet" type="password" onChange={handleChange} required />

        <Button>Registrar</Button>
      </Form>
      <span>
        <p>Já tem uma conta?</p>
        <Link to={"/login"}>Clique aqui para entrar</Link>
      </span>
    </>
  );
};

export default Register;
