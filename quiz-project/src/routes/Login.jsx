import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, Label, SubTitle } from "../styles/index";
import Header from "../components/Header";
import { useState } from "react";
import { loginFirebase } from "../auth/loginFirebase";

const Login = () => {
  const navigate = useNavigate();

  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setDataForm((dataForm) => ({
      ...dataForm,
      [event.target.name]: event.target.value,
    }));
  };

  const handleDataLogin = async (event) => {
    event.preventDefault();

    try {
      const result = await loginFirebase(dataForm.email, dataForm.password);
      if (result) return navigate("/");
    } catch (error) {
      console.error("Erro durante o login:", error);
    }
  };

  return (
    <>
      <Header>Entrar</Header>
      <Form onSubmit={handleDataLogin}>
        <Label>E-mail</Label>
        <Input name="email" type="email" onChange={handleChange} required />

        <Label>Senha</Label>
        <Input
          name="password"
          type="password"
          onChange={handleChange}
          required
        />

        <Link to={"/recoverpassword"}>
          <SubTitle>Esqueci a senha</SubTitle>
        </Link>

        <Button type="submit">Entrar</Button>
      </Form>
      <span>
        <p>Não tem uma conta?</p>
        <Link to={"/register"}>Clique aqui para cadastrar-se!</Link>
      </span>
    </>
  );
};

export default Login;
